"use client"

import { TaskEditor } from "@/widgets"
import { useRouter } from "next/navigation"

export const TaskEditModalClient = ({ id }: { id: string }) => {
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
				className={
					"mx-4 max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-lg bg-white p-6 dark:bg-neutral-800"
				}
				onClick={event => event.stopPropagation()}
			>
				<button onClick={handleGetBack}>Get back</button>

				<div className={"pt-2.5 pb-2.5"}>
					<TaskEditor id={id} />
				</div>
			</div>
		</div>
	)
}
