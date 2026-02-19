"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SorryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onJoinWaitlist: () => void;
}

export function SorryDialog({
  open,
  onOpenChange,
  onJoinWaitlist,
}: SorryDialogProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onJoinWaitlist();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">Sorry!</DialogTitle>
          <DialogDescription className="text-base leading-relaxed">
            We haven&apos;t finished building this yet. We&apos;re almost done
            &mdash; get notified when your scraper is ready to launch.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex gap-2 items-end mt-2">
          <div className="flex-1">
            <label className="text-xs text-zinc-600 font-mono uppercase mb-2 block">
              Email
            </label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              type="email"
            />
          </div>
          <Button type="submit" disabled={!email.trim()}>
            Notify me
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
