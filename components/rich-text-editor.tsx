"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import {
  Bold,
  Italic,
  UnderlineIcon,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  LinkIcon,
  ImageIcon,
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
import { cn } from "@/lib/utils";

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

const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  onClick,
  isActive,
  disabled,
  children,
  title,
  className,
}) => (
  <button
    type="button"
    onMouseDown={(e) => e.preventDefault()}
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={cn(
      "p-2 rounded-lg transition-all duration-200 flex items-center justify-center min-w-[32px] min-h-[32px]",
      isActive
        ? "bg-primary/20 text-primary shadow-sm"
        : "hover:bg-secondary text-muted-foreground hover:text-foreground",
      disabled
        ? "opacity-30 cursor-not-allowed hover:bg-transparent text-muted-foreground"
        : "active:scale-95",
      className
    )}
  >
    {children}
  </button>
);

const HeadingDropdown: React.FC<{ editor: Editor | null }> = ({ editor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-28 px-3 py-1.5 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 border border-border rounded-lg focus:outline-none transition-all"
      >
        <span className="truncate">{currentLevel}</span>
        <ChevronDown size={14} className="ml-2 text-muted-foreground" />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-1 w-40 bg-popover border border-border rounded-lg shadow-xl py-1">
          {[
            {
              label: "Normal",
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
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setLevel(item.val)}
              className={cn(
                "flex items-center w-full px-3 py-2 text-sm transition-colors text-left",
                item.active
                  ? "bg-primary/20 text-primary font-medium"
                  : "text-foreground hover:bg-secondary"
              )}
            >
              <item.icon
                size={16}
                className={cn(
                  "mr-3",
                  item.active ? "text-primary" : "text-muted-foreground"
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

const MenuBar: React.FC<{ editor: Editor | null; updateTrigger: number }> = ({
  editor,
  updateTrigger,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!editor) return null;

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const src = e.target?.result as string;
        if (src) editor.chain().focus().setImage({ src }).run();
      };
      reader.readAsDataURL(file);
    }
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

  const canUndo = updateTrigger >= 0 ? editor.can().undo() : false;
  const canRedo = updateTrigger >= 0 ? editor.can().redo() : false;

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-border p-2 bg-secondary/50">
      <div className="flex items-center bg-background p-1 rounded-lg border border-border mr-2">
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

      <div className="h-6 w-px bg-border mx-1" />
      <HeadingDropdown editor={editor} />
      <div className="h-6 w-px bg-border mx-1" />

      <div className="flex items-center space-x-0.5">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
          title="Bold"
        >
          <Bold size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
          title="Italic"
        >
          <Italic size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive("underline")}
          title="Underline"
        >
          <UnderlineIcon size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive("strike")}
          title="Strikethrough"
        >
          <Strikethrough size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive("code")}
          title="Inline Code"
        >
          <Code size={16} />
        </ToolbarButton>
      </div>

      <div className="h-6 w-px bg-border mx-1" />

      <div className="hidden md:flex items-center space-x-0.5">
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          isActive={editor.isActive({ textAlign: "left" })}
          title="Align Left"
        >
          <AlignLeft size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          isActive={editor.isActive({ textAlign: "center" })}
          title="Align Center"
        >
          <AlignCenter size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          isActive={editor.isActive({ textAlign: "right" })}
          title="Align Right"
        >
          <AlignRight size={16} />
        </ToolbarButton>
      </div>

      <div className="h-6 w-px bg-border mx-1 hidden md:block" />

      <div className="flex items-center space-x-0.5">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
          title="Bullet List"
        >
          <List size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
          title="Ordered List"
        >
          <ListOrdered size={16} />
        </ToolbarButton>
      </div>

      <div className="h-6 w-px bg-border mx-1" />

      <div className="flex items-center space-x-0.5">
        <ToolbarButton
          onClick={setLink}
          isActive={editor.isActive("link")}
          title="Link"
        >
          <LinkIcon size={16} />
        </ToolbarButton>
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
          <ImageIcon size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive("codeBlock")}
          title="Code Block"
        >
          <CodeXml size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
          title="Block Quote"
        >
          <Quote size={16} />
        </ToolbarButton>
        <div className="h-6 w-px bg-border mx-1" />
        <ToolbarButton
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          title="Clear Formatting"
        >
          <RemoveFormatting size={16} />
        </ToolbarButton>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function RichTextEditor({
  value,
  onChange,
  placeholder = "Start writing...",
}: RichTextEditorProps) {
  const [updateCounter, setUpdateCounter] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: true }),
      Placeholder.configure({ placeholder }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-invert prose-sm max-w-none focus:outline-none min-h-[300px] px-4 py-3 leading-relaxed " +
          "prose-headings:text-foreground prose-headings:font-semibold " +
          "prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg " +
          "prose-p:text-foreground prose-strong:text-foreground " +
          "prose-ul:list-disc prose-ol:list-decimal " +
          "prose-li:text-foreground prose-a:text-primary " +
          "prose-code:text-primary prose-code:bg-secondary prose-code:px-1 prose-code:rounded " +
          "prose-pre:bg-secondary prose-pre:p-3 prose-pre:rounded-lg " +
          "prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic",
      },
    },
    content: value,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setUpdateCounter((n) => n + 1);
      onChange(editor.getHTML());
    },
    onSelectionUpdate: () => setUpdateCounter((n) => n + 1),
    onTransaction: () => setUpdateCounter((n) => n + 1),
  });

  // Sync external value changes
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value, false);
    }
  }, [value, editor]);

  return (
    <>
      <style>{`
        .tiptap p.is-editor-empty:first-child::before {
          color: hsl(var(--muted-foreground));
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
        .prose :where(code):not(:where([class~="not-prose"] *))::before,
        .prose :where(code):not(:where([class~="not-prose"] *))::after {
          content: "" !important;
        }
      `}</style>

      <div className="border border-border rounded-lg overflow-hidden bg-input">
        <MenuBar editor={editor} updateTrigger={updateCounter} />
        <div
          className="overflow-y-auto max-h-[400px] cursor-text bg-input"
          onClick={() => editor?.chain().focus().run()}
        >
          <EditorContent editor={editor} />
        </div>
      </div>
    </>
  );
}
