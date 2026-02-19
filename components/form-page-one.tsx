"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ScraperState } from "@/lib/storage";

interface FormPageOneProps {
  state: ScraperState;
  onChange: (partial: Partial<ScraperState>) => void;
  onNext: () => void;
}

export function FormPageOne({ state, onChange, onNext }: FormPageOneProps) {
  return (
    <div className="max-w-2xl mx-auto mt-4">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-pumpkin-500 font-mono">&gt;_</span>
        <h1 className="text-xl font-bold text-white uppercase tracking-tight">
          {state.name}
        </h1>
      </div>

      <div className="space-y-8">
        <div>
          <label className="text-xs text-zinc-600 font-mono uppercase mb-2 block">
            1. Website to start at
          </label>
          <Input
            value={state.websiteUrl}
            onChange={(e) => onChange({ websiteUrl: e.target.value })}
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label className="text-xs text-zinc-600 font-mono uppercase mb-2 block">
            2. Scraping instructions
          </label>
          <Textarea
            value={state.instructions}
            onChange={(e) => onChange({ instructions: e.target.value })}
            placeholder="Describe what data to extract..."
            rows={8}
          />
        </div>

        <div>
          <label className="text-xs text-zinc-600 font-mono uppercase mb-2 block">
            3. Output format
          </label>
          <Textarea
            value={state.outputFormat}
            onChange={(e) => onChange({ outputFormat: e.target.value })}
            placeholder={"e.g.\ntitle, price, url\nor describe the schema..."}
            rows={4}
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-10 pt-6 border-t border-zinc-800">
        <span className="text-xs text-zinc-600 font-mono">1 / 2</span>
        <Button onClick={onNext}>
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
