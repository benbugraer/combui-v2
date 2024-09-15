// import { BorderBeam } from "../magicui/border-beam";

// import Button from "@/components/ui/button";
import { CSSProperties } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { IconParkSolidPageTemplate } from "@/public/icons/TemplateIcon";
import { FluentMdl2WebComponents } from "@/public/icons/ComponentsIcon";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { GoArrowRight } from "react-icons/go";
import { cn } from "@/lib/utils";
import { Cover } from "./ui/cover";
import Beam from "./Beam";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center mt-[4rem] lg:mt-[1rem] mb-[3rem] p-3">
      <Link
        href="https://github.com/benbugraer"
        className="z-10 flex my-12 items-center justify-center animate-in-reverse"
        style={{ "--index": 1 } as CSSProperties}
        target="_blank"
      >
        <div
          className={cn(
            "group rounded-md border border-primary bg-tertiary text-secondary hover:bg-tertiary/40"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center text-sm justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>Created By BUGRA ER</span>
            <GoArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </Link>
      <h1
        className="scroll-m-20 text-3xl sm:text-3xl md:text-5xl font-semibold tracking-tight lg:text-5xl text-center max-w-[550px] animate-in"
        style={{ "--index": 2 } as CSSProperties}
      >
        Welcome To <Cover>CombUI</Cover> Let&apos;s Design Something
      </h1>
      <p
        className="mx-auto max-w-[700px] text-tertiary md:text-lg text-sm text-center mt-2 animate-in"
        style={{ "--index": 3 } as CSSProperties}
      >
        Are you ready to take the look of your projects to the next level? All
        you have to do is copy and paste. Or start a great looking business
        journey from scratch with our ready-made Templates.
      </p>
      <div
        className="flex gap-7 mt-8 animate-in"
        style={{ "--index": 4 } as CSSProperties}
      >
        <Link href="/components">
          <Button className="gap-3">
            <FluentMdl2WebComponents className="w-5 h-5" /> Components
          </Button>
        </Link>
        <Link href="/templates">
          <Button className="gap-3">
            <IconParkSolidPageTemplate className="w-5 h-5" /> Templates
          </Button>
        </Link>
      </div>
      <div
        className="relative flex max-w-full w-6/12 justify-center overflow-hidden rounded-lg animate-in mt-7 bg-tertiary"
        style={{ "--index": 5 } as CSSProperties}
      >
        <Beam />
      </div>
    </div>
  );
}
