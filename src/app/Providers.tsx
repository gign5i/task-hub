"use client"
import { ThemeProvider } from "next-themes"
import { ViewTransitions } from "next-view-transitions"
import type { PropsWithChildren } from "react"
import { Toaster } from "sonner"

export default function Providers({ children }: PropsWithChildren) {
	return (
		<ViewTransitions>
			<ThemeProvider
				attribute={"class"}
				defaultTheme={"system"}
				enableSystem
			>
				{children}
				<Toaster />
			</ThemeProvider>
		</ViewTransitions>
	)
}
