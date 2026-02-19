"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface NameStepProps {
  name: string;
  onSubmit: (name: string) => void;
}

export function NameStep({ name: initial, onSubmit }: NameStepProps) {
  const [name, setName] = useState(initial);

  return (
    <div className="max-w-md mx-auto mt-16">
      <span className="text-xs text-zinc-600 font-mono block mb-2">
        SETUP
      </span>
      <h1 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">
        Name your scraper
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (name.trim()) onSubmit(name.trim());
        }}
      >
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="My first scraper"
          autoFocus
          className="mb-6"
        />
        <Button type="submit" disabled={!name.trim()}>
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
