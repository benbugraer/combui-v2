"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLinks({ href, children }: NavLinkProps) {
  const pathname = `/${usePathname().split("/")[1]}`;
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-1.5 rounded-md text-sm hover:text-secondary transition-all duration-300 hover:duration-300 hover:transition-all ease-linear",
        active ? "bg-tertiary text-primary" : "text-primary"
      )}
    >
      {children}
    </Link>
  );
}
