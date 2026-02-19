"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, value, ...props }, ref) => {
  const localRef = React.useRef<HTMLTextAreaElement | null>(null);

  React.useEffect(() => {
    const el = localRef.current;
    if (el) {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
  }, [value]);

  return (
    <textarea
      className={cn(
        "flex w-full rounded-none border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm text-zinc-200 font-mono placeholder:text-zinc-600 focus-visible:outline-none focus-visible:border-pumpkin-500/50 disabled:cursor-not-allowed disabled:opacity-50 overflow-hidden resize-none",
        className
      )}
      value={value}
      ref={(el) => {
        localRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref)
          (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current =
            el;
      }}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
