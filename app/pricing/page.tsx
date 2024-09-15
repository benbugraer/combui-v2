import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import PricingSection from "./_components/PricingSection";
import { CSSProperties } from "react";

export default function PricingPage() {
  return (
    <div className="bg-background">
      <main>
        <div
          className="relative flex p-24 my-12 w-6/12 flex-col mx-auto justify-center items-center overflow-hidden rounded-lg border border-primary md:shadow-xl bg-tertiary animate-in"
          style={{ "--index": 1 } as CSSProperties}
        >
          <h1
            className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-primary animte-in"
            style={{ "--index": 2 } as CSSProperties}
          >
            Solutions that we offer you
          </h1>
          <p
            className="text-tertiary flex items-center justify-center text-center py-4 animate-in"
            style={{ "--index": 3 } as CSSProperties}
          >
            Let&apos;s select your plan and build your own business or app!
            Maybe you wanna try our beatiful components yess it&apos;s possible
            to.
          </p>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </div>
        <PricingSection />
      </main>
    </div>
  );
}
