"use client"
import { TaskPreview } from "@/entities/task/ui/TaskPreview"
import { type ITask, useTask } from "@/shared"
import { observer } from "mobx-react-lite"

import { FilterByStatus } from "@/components/ui/filters/FilterByStatus"
import { SortByDueDate } from "@/components/ui/filters/SortByDueDate"

export const LastTasks = observer(() => {
	const { sortedTasks } = useTask()

	return (
		<div className={"mt-6"}>
			<div className={"flex w-full justify-between"}>
				<h2 className={"flex items-center gap-1.5 text-xl font-normal"}>
					Last Tasks{" "}
					<span className={"text-xs text-neutral-400"}>
						({sortedTasks.length})
					</span>
				</h2>
				<div className={"flex w-[400px] justify-end gap-1.5"}>
					<FilterByStatus />
					<SortByDueDate />
				</div>
			</div>
			<div className={"mt-3 flex w-full items-center justify-center gap-4"}>
				{!!sortedTasks.length ? (
					sortedTasks.map((task: ITask) => (
						<TaskPreview
							key={`key-${task.id}`}
							task={task}
						/>
					))
				) : (
					<div className={"mt-4 text-center text-xs"}>No last tasks</div>
				)}
			</div>
		</div>
	)
})
