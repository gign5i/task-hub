import { DashboardPages } from "@/shared/config/dashboard-pages"
import Link from "next/link"

export default async function TaskEditPage({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	return (
		<div className={"p-6"}>
			<Link href={DashboardPages.DASHBOARD}>Back to dashboard</Link>
		</div>
	)
}
