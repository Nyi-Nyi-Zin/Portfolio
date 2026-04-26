"use client";

import { useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";

const STORAGE_KEY = "portfolio-chat-messages";

export default function AiAssistant() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const [storedMessages, setStoredMessages] = useState(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  });

  const { messages, sendMessage, status } = useChat();

  const displayMessages = messages.length > 0 ? messages : storedMessages;

  const isLoading = status === "submitted" || status === "streaming";

  const hasSentWelcome = useRef(false);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      setStoredMessages(messages);
    }
  }, [messages]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage({ text: input });
    setInput("");
  };

  useEffect(() => {
    if (!open) return;
    if (hasSentWelcome.current) return;
    if (messages.length > 0) return;

    const timer = setTimeout(() => {
      hasSentWelcome.current = true;
    }, 200);

    return () => clearTimeout(timer);
  }, [open, messages.length]);

  return (
    <>
      {/* ── FLOAT BUTTON ── */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 group"
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
        aria-label={open ? "Close chat" : "Open AI assistant"}
      >
        {!open && (
          <>
            <span className="absolute inset-[-8px] rounded-full border-2 border-indigo-400/50 animate-[pulse-out_2.2s_ease-out_infinite]" />
            <span className="absolute inset-[-8px] rounded-full border-2 border-indigo-400/50 animate-[pulse-out_2.2s_ease-out_infinite] [animation-delay:0.7s]" />
          </>
        )}

        <span
          className="absolute inset-[-6px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin"
          style={{
            animationDuration: "3s",
            background:
              "conic-gradient(from 0deg, #60a5fa, #818cf8, #c084fc, #60a5fa)",
          }}
        >
          <span className="absolute inset-[3px] rounded-full bg-white dark:bg-slate-900" />
        </span>

        <span
          className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-xl
            transition-all duration-200 group-hover:scale-110 group-active:scale-95
            ${
              open
                ? "bg-gradient-to-br from-indigo-600 to-violet-700 shadow-violet-500/40"
                : "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-indigo-500/40"
            }`}
        >
          {open ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              aria-hidden="true"
            >
              <line
                x1="5"
                y1="5"
                x2="17"
                y2="17"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="17"
                y1="5"
                x2="5"
                y2="17"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M14 3C8.477 3 4 7.03 4 12c0 2.16.84 4.14 2.22 5.68L4.5 22l4.74-1.56C10.5 20.8 12.2 21 14 21c5.523 0 10-4.03 10-9s-4.477-9-10-9z"
                fill="white"
                fillOpacity="0.9"
              />
              <circle cx="10" cy="12" r="1.4" fill="#3b82f6" />
              <circle cx="14" cy="12" r="1.4" fill="#3b82f6" />
              <circle cx="18" cy="12" r="1.4" fill="#3b82f6" />
              <path
                d="M21 5L21.5 6.5L23 7L21.5 7.5L21 9L20.5 7.5L19 7L20.5 6.5Z"
                fill="white"
              />
            </svg>
          )}
        </span>

        {!open && (
          <span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full bg-red-500 border-2 border-white dark:border-slate-900 animate-[wiggle_3s_ease-in-out_infinite]" />
        )}
      </button>

      {/* ── CHAT BOX ── */}
      {open && (
        <div className="fixed bottom-20 right-4 w-96 bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 z-50 text-slate-900">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-2 border-b pb-2">
            <div>
              <h3 className="font-bold text-lg">AI Assistant</h3>
              <p className="text-xs text-gray-500">Always here to help</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Clear button */}
              {displayMessages.length > 0 && (
                <button
                  onClick={() => {
                    localStorage.removeItem(STORAGE_KEY);
                    setStoredMessages([]);
                    window.location.reload();
                  }}
                  className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                >
                  Clear
                </button>
              )}
              <div
                className={`h-2 w-2 rounded-full ${
                  isLoading ? "bg-green-500 animate-pulse" : "bg-gray-300"
                }`}
              />
            </div>
          </div>

          {/* MESSAGES */}
          <div className="h-80 overflow-y-auto mb-4 space-y-4 pr-2">
            <div className="flex justify-start">
              <div className="bg-gray-100 text-slate-800 p-3 rounded-2xl text-sm rounded-tl-none max-w-[80%]">
                Hi! I&apos;m Nyi Nyi Zin&apos;s AI assistant. How can I help you
                today?
              </div>
            </div>

            {displayMessages.map((m: any) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-tr-none"
                      : "bg-gray-100 text-slate-800 rounded-tl-none"
                  }`}
                >
                  {m.parts.map((part: any, i: any) =>
                    part.type === "text" ? (
                      <span key={i}>{part.text}</span>
                    ) : null,
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* INPUT */}
          <form onSubmit={onSubmit} className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5 outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !input}
              className="bg-blue-600 text-white rounded-lg px-4 py-2 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
