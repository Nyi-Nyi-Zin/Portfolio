"use client";

import React, { createContext, useContext, ReactNode } from "react";

// 1. Create context
interface TranslationContextType {
  [key: string]: string;
}

const TranslationContext = createContext<TranslationContextType>({});

// 2. Provider component
interface TranslationsProviderProps {
  messages: TranslationContextType;
  children: ReactNode;
}

export default function TranslationsProvider({
  messages,
  children,
}: TranslationsProviderProps) {
  return (
    <TranslationContext.Provider value={messages}>
      {children}
    </TranslationContext.Provider>
  );
}

// 3. Hook to use translations
export function useT() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useT must be used within a TranslationsProvider");
  }
  return context;
}
