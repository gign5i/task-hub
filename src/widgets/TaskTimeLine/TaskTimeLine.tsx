"use client"

import { TaskPreview } from "@/entities/task"
import { useTask } from "@/shared"
import { getHours, getMinutes } from "date-fns"
import { observer } from "mobx-react-lite"
import Image from "next/image"

const HOURS = Array.from({ length: 9 }).map((_, i) => i + 9)

export const TaskTimeLine = observer(() => {
	const { todayTasks } = useTask()
	const users = [...new Set(todayTasks.map(task => task.users).flat())]

	return (
		<div className="bg-card my-3 rounded-xl p-5">
			<div className="mb-4 flex items-center justify-between">
				<h2 className="text-xl font-medium">Today Tasks</h2>
				<div className="flex items-center -space-x-5">
					{users.map((user, idx) => (
						<Image
							key={`item-${user.name}-${idx}`}
							src={user.avatarPath ?? ""}
							alt={user.name}
							width={40}
							height={40}
							className="rounded-full border border-white dark:border-neutral-800"
						/>
					))}
				</div>
			</div>
			<div className="w-full overflow-x-auto p-1">
				<div className="grid grid-cols-9">
					{HOURS.map(hour => (
						<div
							key={hour}
							className="font-meduim flex-1 text-left text-sm opacity-50"
						>
							{hour > 12 ? `${hour - 12}pm` : `${hour}am`}
						</div>
					))}
				</div>
				<div className="relative h-75">
					{todayTasks.map(task => {
						const start = getHours(task.deuDate.startTime!)
						const end = getHours(task.deuDate.endTime!)

						const startMinutes = getMinutes(task.deuDate.startTime!)
						const endMinutes = getMinutes(task.deuDate.endTime!)

						const startPercent =
							(((start - 9) * 60 + startMinutes) / ((17 - 9) * 60)) * 100
						const endPercent =
							(((end - 9) * 60 + endMinutes) / ((17 - 9) * 60)) * 100

						return (
							<div
								key={task.id}
								className="absolute top-3"
								style={{
									left: `${startPercent}%`,
									width: `${endPercent - startPercent}%`
								}}
							>
								<TaskPreview
									task={task}
									minimize
								/>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
})
