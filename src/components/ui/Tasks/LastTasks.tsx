"use client"
import { TASKS } from "@/MOCKS/tasks.data"
import { useMemo, useState } from "react"

import { TaskPreview } from "@/components/ui/Tasks/TaskPreview"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"

import type { ITask, TTaskType } from "@/types/task.types"

import { StatusConfig } from "@/config/select-options.config"

export function LastTasks() {
	const [taskType, setTaskType] = useState<TTaskType | null>(null)

	const FILTERED_BY_STATUS = useMemo(() => {
		switch (taskType) {
			case "not-started":
			case "in-progress":
				return TASKS.filter(task =>
					task.subTasks.some(subTask => !subTask.isCompleted)
				)
			case "completed":
				return TASKS.filter(task =>
					task.subTasks.some(subTask => subTask.isCompleted)
				)
			default:
				return TASKS
		}
	}, [taskType])

	return (
		<div className={"mt-6"}>
			<div className={"flex w-full justify-between"}>
				<h2 className={"flex items-center gap-1.5 text-xl font-normal"}>
					Last Tasks{" "}
					<span className={"text-xs text-neutral-400"}>
						({FILTERED_BY_STATUS.length})
					</span>
				</h2>
				<Select
					items={StatusConfig}
					highlightItemOnHover={false}
					value={taskType === null ? "all" : taskType}
					onValueChange={value => setTaskType(value === "all" ? null : value)}
				>
					<SelectTrigger className="w-full max-w-48 bg-white">
						<SelectValue placeholder="All" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Statuses</SelectLabel>
							{StatusConfig.map(configItm => (
								<SelectItem
									className={`hover:text-primary select-none:text-primary hover:bg-white ${taskType === configItm.value && "text-primary"}`}
									key={`config-${configItm.value}`}
									value={configItm.value}
								>
									{configItm.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
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
