import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "my-btn": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export {};
