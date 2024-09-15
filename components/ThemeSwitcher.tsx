"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMdCheckmark } from "react-icons/io";
import { AiFillMoon, AiFillSun } from "react-icons/ai";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, themes } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="ml-4">
        <Button size="icon" variant="outline" className="w-8 h-8 rounded-md">
          {resolvedTheme === "dark" ? (
            <AiFillMoon className="h-5 w-5 text-primary" />
          ) : (
            <AiFillSun className="h-5 w-5 text-primary" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-primary">
        {themes.map((t) => (
          <DropdownMenuItem key={t} onClick={() => setTheme(t)}>
            <span className="capitalize">{t === "system" ? "System" : t}</span>
            {theme === t && (
              <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                <IoMdCheckmark className="w-5 h-5" />
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
