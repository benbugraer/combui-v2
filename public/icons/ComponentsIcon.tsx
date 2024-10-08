import React from "react";
import type { SVGProps } from "react";

export function FluentMdl2WebComponents(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 2048 2048"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1024 1024h768v896H128V256h896zM256 384v640h640V384zm640 1408v-640H256v640zm768 0v-640h-640v640zM1280 0h768v768h-768zm640 640V128h-512v512z"
      ></path>
    </svg>
  );
}
