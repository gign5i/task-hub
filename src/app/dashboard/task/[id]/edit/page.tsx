import { Pages } from "@/shared"
import Link from "next/link"

export default async function TaskEditPage({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	return (
		<div className={"p-6"}>
			<Link href={Pages.DASHBOARD}>Back to dashboard</Link>
		</div>
	)
}
