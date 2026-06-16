"use client"
import { TASKS } from "@/MOCKS/tasks.data"
import { useMemo, useState } from "react"

import { TaskPreview } from "@/components/ui/Tasks/TaskPreview"
import { FilterByStatus } from "@/components/ui/filters/FilterByStatus"
import { SortByDueDate } from "@/components/ui/filters/SortByDueDate"

import type { ITask, TSortType, TTaskType } from "@/types/task.types"

export function LastTasks() {
	const [taskType, setTaskType] = useState<TTaskType | null>(null)
	const [sortByDueDate, setSortByDueDate] = useState<TSortType>("asc")

	const FILTERED_BY_STATUS = useMemo(() => {
		const filtered = !taskType
			? TASKS
			: TASKS.filter(task => {
					switch (taskType) {
						case "not-started":
							return task.subTasks.every(subTask => !subTask.isCompleted)

						case "in-progress":
							return task.subTasks.some(subTask => !subTask.isCompleted)

						case "completed":
							return task.subTasks.every(subTask => subTask.isCompleted)
						default:
							return true
					}
				})

		const sortedTasks = filtered.sort((a, b) => {
			const dateA = new Date(a.deuDate).getDate()
			const dateB = new Date(b.deuDate).getDate()

			// console.log("dateA: ", dateA)
			// console.log("dateB: ", dateB)

			if (sortByDueDate === "asc") {
				return dateA - dateB
			} else {
				return dateB - dateA
			}
		})

		console.log("sortedTasks: ", sortedTasks)

		return sortedTasks
	}, [taskType, sortByDueDate])

	return (
		<div className={"mt-6"}>
			<div className={"flex w-full justify-between"}>
				<h2 className={"flex items-center gap-1.5 text-xl font-normal"}>
					Last Tasks{" "}
					<span className={"text-xs text-neutral-400"}>
						({FILTERED_BY_STATUS.length})
					</span>
				</h2>
				<div className={"flex w-[400px] justify-end gap-1.5"}>
					<FilterByStatus
						taskType={taskType}
						setTaskType={setTaskType}
					/>
					<SortByDueDate
						sortByDueDate={sortByDueDate}
						setSortByDueDate={setSortByDueDate}
					/>
				</div>
			</div>
			<div className={"mt-3 flex w-full items-center justify-center gap-4"}>
				{!!FILTERED_BY_STATUS.length ? (
					FILTERED_BY_STATUS.map((task: ITask) => (
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
}
