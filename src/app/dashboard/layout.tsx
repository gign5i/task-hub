import type { ReactNode } from "react"

import { Sidebar } from "@/components/layout/sidebar/Sidebar"

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
