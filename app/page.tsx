import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-[48px] md:text-[80px] leading-[0.95] font-bold text-white uppercase tracking-tighter mb-12">
          <span className="text-pumpkin-500">Scrapers</span> that
          <br />
          maintain themselves
        </h1>
        <Link href="/dashboard">
          <Button size="lg">
            Get one now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
