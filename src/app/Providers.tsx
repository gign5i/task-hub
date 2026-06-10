"use client";
import type {PropsWithChildren} from "react";
import {ViewTransition} from 'react';
import {ThemeProvider} from "next-themes";

export default function Providers({ children }: PropsWithChildren) {
  return <ThemeProvider attribute={'class'} defaultTheme={'system'} enableSystem>
    <ViewTransition>
      {children}
    </ViewTransition>
  </ThemeProvider>;
}
