"use client";
import type {PropsWithChildren} from "react";
import {ViewTransition} from "react";
import {ThemeProvider} from "next-themes";
import { Toaster } from "sonner";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
      <ViewTransition>{children}
        <Toaster />
      </ViewTransition>
    </ThemeProvider>
  );
}
