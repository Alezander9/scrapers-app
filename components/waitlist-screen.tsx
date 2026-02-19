interface WaitlistScreenProps {
  scraperName: string;
}

export function WaitlistScreen({ scraperName }: WaitlistScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8">
      <span className="text-pumpkin-500 text-xs font-mono bg-pumpkin-500/10 px-2 py-1 border border-pumpkin-500/50 mb-8 inline-block">
        [ CONFIRMED ]
      </span>
      <h1 className="text-[32px] md:text-[48px] leading-[1] font-bold text-white uppercase tracking-tighter mb-4">
        You&apos;re on the waitlist
      </h1>
      <p className="text-zinc-400 font-mono text-sm max-w-md leading-relaxed">
        We&apos;ll notify you when <span className="text-zinc-200">{scraperName}</span> is
        ready to deploy.
      </p>
    </div>
  );
}
