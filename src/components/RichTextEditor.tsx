"use client";

import { useEffect, useRef } from "react";

type RichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize logic
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="w-full">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your thoughts freely... (Sentence for sentence, exact words only)"
        className="w-full bg-transparent border-none focus:ring-0 text-slate-800 dark:text-gray-200 placeholder:text-gray-500 resize-none min-h-[200px] text-lg leading-relaxed font-medium"
        spellCheck="true"
      />
    </div>
  );
}
