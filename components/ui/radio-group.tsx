"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const RadioGroupContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
}>({ value: "", onValueChange: () => {} });

interface RadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}

export function RadioGroup({
  value,
  onValueChange,
  className,
  children,
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <div className={cn("flex flex-col gap-3", className)} role="radiogroup">
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

interface RadioGroupItemProps {
  value: string;
  id?: string;
  className?: string;
}

export function RadioGroupItem({ value, id, className }: RadioGroupItemProps) {
  const ctx = React.useContext(RadioGroupContext);
  const checked = ctx.value === value;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      id={id}
      className={cn(
        "h-4 w-4 rounded-full border border-zinc-600 flex items-center justify-center focus:outline-none focus-visible:ring-1 focus-visible:ring-pumpkin-500",
        checked && "border-pumpkin-500",
        className
      )}
      onClick={() => ctx.onValueChange(value)}
    >
      {checked && <div className="h-2 w-2 rounded-full bg-pumpkin-500" />}
    </button>
  );
}
