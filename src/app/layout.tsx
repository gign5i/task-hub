import "./globals.css"
import { cn } from "@/shared/lib/helpers/utils"
import type { Metadata } from "next"
import { Geist, Poppins } from "next/font/google"

import Providers from "@/app/Providers"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const font = Poppins({
	variable: "--font-poppins-sans",
	subsets: ["latin"],
	weight: ["300", "400", "600", "700", "800"]
})

export const metadata: Metadata = {
	icons: {
		icon: "/images/favicon-logo.svg",
		shortcut: "/images/favicon-logo.svg"
	},
	title: {
		absolute: "Task Hub",
		template: "%s | Task Hub"
	},
	description: "task managment"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				font.variable,
				"font-sans",
				geist.variable
			)}
			suppressHydrationWarning
		>
			<body className="flex min-h-full flex-col">
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
