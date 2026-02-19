"use client";

import { Plus } from "lucide-react";

interface SidebarProps {
  scraperName: string;
  step: number;
  onReset: () => void;
}

export function Sidebar({ scraperName, step, onReset }: SidebarProps) {
  return (
    <aside className="w-64 shrink-0 border-r border-zinc-800 bg-[#0B0B0E] flex flex-col">
      <div className="px-4 py-3 border-b border-zinc-800">
        <h2 className="text-xs font-bold text-zinc-600 uppercase tracking-wider font-mono">
          My Scrapers
        </h2>
      </div>
      <div className="flex-1 p-2 flex flex-col gap-1">
        {step > 0 && scraperName ? (
          <div className="px-3 py-2 border border-zinc-800 bg-zinc-900/30 text-zinc-300 text-sm font-mono truncate">
            {scraperName}
          </div>
        ) : (
          <div className="px-3 py-2 text-zinc-600 text-sm font-mono">
            New Scraper
          </div>
        )}
      </div>
      <div className="p-2 border-t border-zinc-800">
        <button
          onClick={onReset}
          className="w-full flex items-center gap-2 px-3 py-2 text-xs text-zinc-600 hover:text-zinc-300 hover:bg-zinc-900/50 transition-colors font-mono uppercase tracking-wider"
        >
          <Plus className="h-3.5 w-3.5" />
          New Scraper
        </button>
      </div>
    </aside>
  );
}
