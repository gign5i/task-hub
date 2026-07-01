import { Sidebar } from "@/features/Sidebar"
import type { ReactNode } from "react"

export default function DashboardLayout({
	children,
	modals
}: {
	children: ReactNode
	modals: ReactNode
}) {
	return (
		<div className={"grid min-h-screen grid-cols-[230px_1fr]"}>
			<Sidebar />
			<main className={"p-5"}>{children}</main>
			{modals}
		</div>
	)
}
