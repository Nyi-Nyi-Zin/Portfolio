"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link as LinkIcon,
  Image as ImageIcon,
  Minus,
  RemoveFormatting,
  CodeXml,
  ChevronDown,
  Type,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...inputs: (string | undefined | null | false)[]) =>
  twMerge(clsx(inputs));

/* -------------------------------------------------------------------------- */
/*                                SUB-COMPONENTS                              */
/* -------------------------------------------------------------------------- */

interface ToolbarButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  title: string;
  className?: string;
}

// 1. Generic Toolbar Button
const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  onClick,
  isActive,
  disabled,
  children,
  title,
  className,
}) => (
  <button
    type="button" // Important: prevents form submission
    onMouseDown={(e) => e.preventDefault()} // CRITICAL: Prevents button from stealing focus from editor
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={cn(
      "p-2 rounded-lg transition-all duration-200 flex items-center justify-center min-w-[34px] min-h-[34px]",
      isActive
        ? "bg-indigo-100 text-indigo-700 shadow-sm"
        : "hover:bg-gray-100 text-gray-600 hover:text-gray-900",
      disabled
        ? "opacity-30 cursor-not-allowed hover:bg-transparent text-gray-400"
        : "active:scale-95",
      className
    )}
  >
    {children}
  </button>
);

// 2. Headings Dropdown
const HeadingDropdown: React.FC<{ editor: Editor | null }> = ({ editor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!editor) return null;

  const currentLevel = editor.isActive("heading", { level: 1 })
    ? "Heading 1"
    : editor.isActive("heading", { level: 2 })
    ? "Heading 2"
    : editor.isActive("heading", { level: 3 })
    ? "Heading 3"
    : "Normal";

  const setLevel = (level: 0 | 1 | 2 | 3) => {
    if (level === 0) {
      editor.chain().focus().setParagraph().run();
    } else {
      editor.chain().focus().toggleHeading({ level }).run();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
        onClick={toggleOpen}
        className="flex items-center justify-between w-32 px-3 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-all"
      >
        <span className="truncate">{currentLevel}</span>
        <ChevronDown size={14} className="ml-2 text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-xl py-1 animate-in fade-in zoom-in-95 duration-100">
          {[
            {
              label: "Normal Text",
              icon: Type,
              val: 0 as const,
              active: editor.isActive("paragraph"),
            },
            {
              label: "Heading 1",
              icon: Heading1,
              val: 1 as const,
              active: editor.isActive("heading", { level: 1 }),
            },
            {
              label: "Heading 2",
              icon: Heading2,
              val: 2 as const,
              active: editor.isActive("heading", { level: 2 }),
            },
            {
              label: "Heading 3",
              icon: Heading3,
              val: 3 as const,
              active: editor.isActive("heading", { level: 3 }),
            },
          ].map((item) => (
            <button
              key={item.label}
              type="button"
              onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
              onClick={() => setLevel(item.val)}
              className={cn(
                "flex items-center w-full px-3 py-2.5 text-sm transition-colors text-left",
                item.active
                  ? "bg-indigo-50 text-indigo-700 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              )}
            >
              <item.icon
                size={16}
                className={cn(
                  "mr-3",
                  item.active ? "text-indigo-500" : "text-gray-400"
                )}
              />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// 3. Main Menu Bar
const MenuBar: React.FC<{ editor: Editor | null; updateTrigger: number }> = ({
  editor,
  updateTrigger,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!editor) {
    return null;
  }

  // --- Helpers ---
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const src = e.target?.result as string;
        if (src) {
          editor.chain().focus().setImage({ src }).run();
        }
      };
      reader.readAsDataURL(file);
    }
    // Reset value so we can select same file again if needed
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  // Check history state explicitly - depends on updateTrigger to re-evaluate
  const canUndo = updateTrigger >= 0 ? editor.can().undo() : false;
  const canRedo = updateTrigger >= 0 ? editor.can().redo() : false;

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-gray-100 p-2 bg-white z-20">
      {/* Group: History (Undo/Redo) */}
      <div className="flex items-center bg-gray-50 p-1 rounded-lg border border-gray-100 mr-2">
        <ToolbarButton
          onClick={() => editor.chain().undo().run()}
          disabled={!canUndo}
          title="Undo (Ctrl+Z)"
        >
          <Undo size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().redo().run()}
          disabled={!canRedo}
          title="Redo (Ctrl+Y)"
        >
          <Redo size={16} />
        </ToolbarButton>
      </div>

      <div className="h-6 w-px bg-gray-200 mx-1" />

      {/* Group: Headings */}
      <HeadingDropdown editor={editor} />

      <div className="h-6 w-px bg-gray-200 mx-1" />

      {/* Group: Text Styles */}
      <div className="flex items-center space-x-0.5">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
          title="Bold (Ctrl+B)"
        >
          <Bold size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
          title="Italic (Ctrl+I)"
        >
          <Italic size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive("underline")}
          title="Underline (Ctrl+U)"
        >
          <UnderlineIcon size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive("strike")}
          title="Strikethrough"
        >
          <Strikethrough size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive("code")}
          title="Inline Code"
        >
          <Code size={18} />
        </ToolbarButton>
      </div>

      <div className="h-6 w-px bg-gray-200 mx-1" />

      {/* Group: Alignment */}
      <div className="hidden md:flex items-center space-x-0.5">
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          isActive={editor.isActive({ textAlign: "left" })}
          title="Align Left"
        >
          <AlignLeft size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          isActive={editor.isActive({ textAlign: "center" })}
          title="Align Center"
        >
          <AlignCenter size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          isActive={editor.isActive({ textAlign: "right" })}
          title="Align Right"
        >
          <AlignRight size={18} />
        </ToolbarButton>
      </div>

      <div className="h-6 w-px bg-gray-200 mx-1 hidden md:block" />

      {/* Group: Lists */}
      <div className="flex items-center space-x-0.5">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
          title="Bullet List"
        >
          <List size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
          title="Ordered List"
        >
          <ListOrdered size={18} />
        </ToolbarButton>
      </div>

      <div className="h-6 w-px bg-gray-200 mx-1" />

      {/* Group: Insert */}
      <div className="flex items-center space-x-0.5">
        <ToolbarButton
          onClick={setLink}
          isActive={editor.isActive("link")}
          title="Link"
        >
          <LinkIcon size={18} />
        </ToolbarButton>

        {/* Hidden Image Input */}
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageUpload}
          accept="image/*"
        />
        <ToolbarButton
          onClick={() => fileInputRef.current?.click()}
          title="Upload Image"
        >
          <ImageIcon size={18} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive("codeBlock")}
          title="Code Block"
        >
          <CodeXml size={18} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
          title="Block Quote"
        >
          <Quote size={18} />
        </ToolbarButton>

        <div className="h-6 w-px bg-gray-200 mx-1" />

        <ToolbarButton
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          title="Clear Formatting"
        >
          <RemoveFormatting size={18} />
        </ToolbarButton>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

const RichTextEditor: React.FC = () => {
  // We use a state counter to force re-render when the editor updates.
  // This is CRITICAL for Undo/Redo buttons to update their disabled state.
  const [updateCounter, setUpdateCounter] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: true }),
      Placeholder.configure({
        placeholder: "Start typing your masterpiece...",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-slate prose-lg max-w-none focus:outline-none min-h-[500px] px-8 py-6 leading-relaxed selection:bg-indigo-100 selection:text-indigo-900",
      },
    },
    content: `
      <h2>Welcome to Zenith Editor</h2>
      <p>This is a custom editor built with <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Tiptap</strong>.</p>
      <ul>
        <li>Try the <strong>Undo/Redo</strong> buttons in the toolbar.</li>
        <li>Paste images directly or use the upload button.</li>
        <li>Format your text with style!</li>
      </ul>
      <p>Happy writing!</p>
    `,
    immediatelyRender: false,

    // EVENTS: These ensure the React buttons re-render when typing/clicking
    // The previous issue was that 'history' updates didn't always trigger a react render
    // specifically for the `can().undo()` check.
    onUpdate: () => setUpdateCounter((n) => n + 1),
    onSelectionUpdate: () => setUpdateCounter((n) => n + 1),
    onTransaction: () => setUpdateCounter((n) => n + 1),
  });

  return (
    <>
      {/* 
        CUSTOM CSS: 
        1. Remove backticks from prose inline code.
        2. Style the inline code to look nice.
        3. Placeholder styles.
      */}
      <style>{`
        .prose :where(code):not(:where([class~="not-prose"] *))::before {
          content: "" !important;
          display: none !important;
        }
        .prose :where(code):not(:where([class~="not-prose"] *))::after {
          content: "" !important;
          display: none !important;
        }
        /* Custom Inline Code Look */
        .prose code {
          background-color: #f1f5f9; /* slate-100 */
          color: #db2777; /* pink-600 */
          padding: 0.2em 0.4em;
          border-radius: 0.3em;
          font-weight: 500 !important;
          font-size: 0.875em;
        }
        .prose blockquote {
            border-left-color: #6366f1; /* indigo-500 */
            background-color: #f8fafc;
            padding: 1rem;
            border-radius: 0 0.5rem 0.5rem 0;
            font-style: italic;
        }
        .prose img {
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          margin-top: 1.5em;
          margin-bottom: 1.5em;
        }
        /* Placeholder logic */
        .tiptap p.is-editor-empty:first-child::before {
          color: #94a3b8;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
      `}</style>

      <div className="flex flex-col h-full bg-white">
        {/* Render Toolbar */}
        <div className="sticky top-0 z-30 shadow-sm">
          <MenuBar editor={editor} updateTrigger={updateCounter} />
        </div>

        {/* Render Editor Area */}
        <div
          className="grow overflow-y-auto cursor-text bg-white"
          onClick={() => {
            if (editor) {
              editor.chain().focus().run();
            }
          }}
        >
          <div className="max-w-4xl mx-auto h-full">
            <EditorContent editor={editor} className="h-full" />
          </div>
        </div>

        {/* Status Bar */}
        <div className="flex-none border-t border-gray-100 bg-gray-50 px-4 py-2 text-xs text-gray-400 flex justify-between">
          <span>
            {editor ? editor.storage.characterCount?.words?.() ?? 0 : 0} words
          </span>
          <span>{editor?.isFocused ? "Writing..." : "Ready"}</span>
        </div>
      </div>
    </>
  );
};

export default RichTextEditor;
