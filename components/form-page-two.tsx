"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft } from "lucide-react";
import type { ScraperState } from "@/lib/storage";

interface FormPageTwoProps {
  state: ScraperState;
  onChange: (partial: Partial<ScraperState>) => void;
  onBack: () => void;
  onFinish: () => void;
}

export function FormPageTwo({
  state,
  onChange,
  onBack,
  onFinish,
}: FormPageTwoProps) {
  return (
    <div className="max-w-2xl mx-auto mt-4">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-pumpkin-500 font-mono">&gt;_</span>
        <h1 className="text-xl font-bold text-white uppercase tracking-tight">
          {state.name}
        </h1>
      </div>

      <div className="space-y-10">
        {/* 1. When to run */}
        <div>
          <label className="text-xs text-zinc-600 font-mono uppercase mb-3 block">
            1. When to run?
          </label>
          <RadioGroup
            value={state.schedule}
            onValueChange={(v) => onChange({ schedule: v })}
          >
            {["hourly", "daily", "weekly", "custom"].map((opt) => (
              <div key={opt} className="flex items-center gap-3">
                <RadioGroupItem value={opt} id={`schedule-${opt}`} />
                <Label
                  htmlFor={`schedule-${opt}`}
                  className="text-sm text-zinc-300 font-mono capitalize cursor-pointer"
                >
                  {opt}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* 2. Where to send results */}
        <div>
          <label className="text-xs text-zinc-600 font-mono uppercase mb-3 block">
            2. Where to send results?
          </label>
          <RadioGroup
            value={state.deliveryMethod}
            onValueChange={(v) => onChange({ deliveryMethod: v })}
            className="gap-4"
          >
            <div className="flex items-center gap-3">
              <RadioGroupItem value="email" id="delivery-email" />
              <Label
                htmlFor="delivery-email"
                className="text-sm text-zinc-300 font-mono cursor-pointer shrink-0"
              >
                Email to
              </Label>
              {state.deliveryMethod === "email" && (
                <Input
                  value={state.deliveryValue}
                  onChange={(e) => onChange({ deliveryValue: e.target.value })}
                  placeholder="you@example.com"
                  className="max-w-xs h-8 text-xs"
                />
              )}
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="post" id="delivery-post" />
              <Label
                htmlFor="delivery-post"
                className="text-sm text-zinc-300 font-mono cursor-pointer shrink-0"
              >
                POST to
              </Label>
              {state.deliveryMethod === "post" && (
                <Input
                  value={state.deliveryValue}
                  onChange={(e) => onChange({ deliveryValue: e.target.value })}
                  placeholder="https://api.example.com/webhook"
                  className="max-w-xs h-8 text-xs"
                />
              )}
            </div>
          </RadioGroup>
        </div>

        {/* 3. When should we verify results */}
        <div>
          <label className="text-xs text-zinc-600 font-mono uppercase mb-3 block">
            3. When should we verify results?
          </label>
          <RadioGroup
            value={state.verifySchedule}
            onValueChange={(v) => onChange({ verifySchedule: v })}
          >
            {["always", "daily", "custom"].map((opt) => (
              <div key={opt} className="flex items-center gap-3">
                <RadioGroupItem value={opt} id={`verify-${opt}`} />
                <Label
                  htmlFor={`verify-${opt}`}
                  className="text-sm text-zinc-300 font-mono capitalize cursor-pointer"
                >
                  {opt === "daily" ? "Every day" : opt}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* 4. What to do on scrape failure */}
        <div>
          <label className="text-xs text-zinc-600 font-mono uppercase mb-3 block">
            4. What to do on scrape failure?
          </label>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={state.onFailureFix}
                onCheckedChange={(c) => onChange({ onFailureFix: c === true })}
                id="failure-fix"
              />
              <Label
                htmlFor="failure-fix"
                className="text-sm text-zinc-300 font-mono cursor-pointer"
              >
                Fix it
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                checked={state.onFailureEmail}
                onCheckedChange={(c) =>
                  onChange({ onFailureEmail: c === true })
                }
                id="failure-email"
              />
              <Label
                htmlFor="failure-email"
                className="text-sm text-zinc-300 font-mono cursor-pointer shrink-0"
              >
                Email me
              </Label>
              {state.onFailureEmail && (
                <Input
                  value={state.onFailureEmailAddress}
                  onChange={(e) =>
                    onChange({ onFailureEmailAddress: e.target.value })
                  }
                  placeholder="you@example.com"
                  className="max-w-xs h-8 text-xs"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-10 pt-6 border-t border-zinc-800">
        <Button variant="ghost" onClick={onBack} size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <span className="text-xs text-zinc-600 font-mono">2 / 2</span>
        <Button onClick={onFinish}>Deploy Scraper</Button>
      </div>
    </div>
  );
}
