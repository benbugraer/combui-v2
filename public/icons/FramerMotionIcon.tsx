import React from "react";
import type { SVGProps } from "react";

export function TablerBrandFramerMotion(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M12 12L4 4v16L20 4v16l-4-4"></path>
        <path d="m20 12l-8 8l-4-4"></path>
      </g>
    </svg>
  );
}
