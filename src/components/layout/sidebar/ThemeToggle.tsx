"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
	const { setTheme, theme } = useTheme()

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className={
				"rounded-full bg-neutral-200 p-2 text-neutral-800 transition-colors hover:bg-neutral-300 dark:bg-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-600"
			}
		>
			{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
		</button>
	)
}
