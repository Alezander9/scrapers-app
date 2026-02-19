"use client";

import { useState, useEffect, useCallback } from "react";
import { Sidebar } from "@/components/sidebar";
import { NameStep } from "@/components/name-step";
import { FormPageOne } from "@/components/form-page-one";
import { FormPageTwo } from "@/components/form-page-two";
import { SorryDialog } from "@/components/sorry-dialog";
import { WaitlistScreen } from "@/components/waitlist-screen";
import {
  loadState,
  saveState,
  defaultState,
  type ScraperState,
} from "@/lib/storage";

export function DashboardClient() {
  const [state, setState] = useState<ScraperState>(defaultState);
  const [loaded, setLoaded] = useState(false);
  const [showSorry, setShowSorry] = useState(false);

  useEffect(() => {
    setState(loadState());
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) saveState(state);
  }, [state, loaded]);

  const update = useCallback((partial: Partial<ScraperState>) => {
    setState((prev) => ({ ...prev, ...partial }));
  }, []);

  const reset = useCallback(() => {
    setState(defaultState);
    setShowSorry(false);
  }, []);

  const handleJoinWaitlist = useCallback(() => {
    setShowSorry(false);
    update({ step: 3 });
  }, [update]);

  if (!loaded) return null;

  return (
    <div className="flex h-screen">
      <Sidebar scraperName={state.name} step={state.step} onReset={reset} />
      <main className="flex-1 overflow-y-auto p-8">
        {state.step === 0 && (
          <NameStep
            name={state.name}
            onSubmit={(name) => update({ name, step: 1 })}
          />
        )}
        {state.step === 1 && (
          <FormPageOne
            state={state}
            onChange={update}
            onNext={() => update({ step: 2 })}
          />
        )}
        {state.step === 2 && (
          <FormPageTwo
            state={state}
            onChange={update}
            onBack={() => update({ step: 1 })}
            onFinish={() => setShowSorry(true)}
          />
        )}
        {state.step === 3 && (
          <WaitlistScreen scraperName={state.name} />
        )}
      </main>
      <SorryDialog
        open={showSorry}
        onOpenChange={setShowSorry}
        onJoinWaitlist={handleJoinWaitlist}
      />
    </div>
  );
}
