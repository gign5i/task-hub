"use client"
import { ThemeProvider } from "next-themes"
import { ViewTransitions } from "next-view-transitions"
import dynamic from "next/dynamic"
import type { PropsWithChildren } from "react"
import { Toaster } from "sonner"

const DynamicThemeToggle = dynamic(
	() => import("@/shared/ui/ThemeToggle").then(mod => mod.ThemeToggle),
	{
		ssr: false
	}
)

export default function Providers({ children }: PropsWithChildren) {
	return (
		<ViewTransitions>
			<ThemeProvider
				attribute={"class"}
				defaultTheme={"system"}
				enableSystem
			>
				<Toaster position={"top-center"} />
				{children}
				<DynamicThemeToggle />
			</ThemeProvider>
		</ViewTransitions>
	)
}
