"use client"

import { useRouter } from "next/navigation"

export function TaskEditModalClient({ id }: { id: string }) {
	const router = useRouter()

	const handleGetBack = () => router.back()

	return (
		<div
			className={
				"fixed inset-0 z-50 flex items-center justify-center bg-black/50"
			}
			onClick={handleGetBack}
		>
			<div
				className={"h-[max-content] w-[max-content] rounded-2xl bg-white p-5"}
				onClick={event => event.stopPropagation()}
			>
				<button onClick={handleGetBack}>task edit{id}</button>
			</div>
		</div>
	)
}
