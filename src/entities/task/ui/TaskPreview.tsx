"use client"
import { ProgressBar } from "@/features/ProgressBar"
import type { ITask } from "@/shared"
import { DashboardPages } from "@/shared/config/dashboard-pages"
import { AddSubTask } from "@/widgets/AddSubtask"
import { isToday } from "date-fns"
import {
	Image as ImageIcon,
	Link as LinkIcon,
	MessageSquareMore,
	Pencil
} from "lucide-react"
import { observer } from "mobx-react-lite"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

import { ICON_MAP } from "@/app/dashboard/@modals/(.)task/[id]/edit/task-icons.data"

export const TaskPreview = observer(
	({ task, minimize = false }: { task: ITask; minimize?: boolean }) => {
		const CompletedTasks = task.subTasks.filter(
			element => element.isCompleted
		).length
		const TotalTasks = task.subTasks.length
		const Progress = Math.round((CompletedTasks / TotalTasks) * 100)
		const TaskIconName = ICON_MAP[task.icon]

		const dueDate = useMemo(() => {
			if (isToday(task.deuDate.date)) return "Today"

			return `${Math.ceil((+task.deuDate.date - Date.now()) / (1000 * 60 * 60 * 24))} days`
		}, [task])

		return (
			<div className={"bg-card w-full rounded-2xl p-5"}>
				<div className={"flex flex-col items-center justify-center gap-3"}>
					<div
						className={`flex w-full ${!minimize ? "items-start justify-between" : "flex-col items-start gap-3.5 rounded-2xl border border-neutral-400/10 bg-neutral-200 p-1.5 dark:bg-neutral-800"}`}
					>
						<div className="flex w-full items-start gap-4.5">
							<div
								className={
									"bg-primary/30 text-primary flex items-center justify-center rounded-full object-cover p-1.5"
								}
							>
								<TaskIconName />
							</div>
							<div className={"flex flex-col"}>
								<span className={"text-m w-28 font-normal opacity-85"}>
									{task.title}
								</span>
								<div className={"text-sm text-neutral-600 opacity-50"}>
									Due: {dueDate}
								</div>
							</div>
						</div>
						<div className={"flex items-center justify-center -space-x-3"}>
							{task.users.map(user => (
								<Image
									className={
										"rounded-full border-1 border-neutral-200 object-contain"
									}
									key={`user-${user.id}`}
									src={user.avatarPath || ""}
									width={32}
									height={32}
									alt={`person-avatar-${user.id}`}
								/>
							))}
						</div>
					</div>
					{!minimize && (
						<>
							<div className={"mb-3 w-full"}>
								<ProgressBar progress={Progress} />
							</div>
							<div className={"flex w-full items-center justify-between gap-1"}>
								<div className={"flex items-center gap-2"}>
									<div className={"flex items-center gap-1"}>
										<MessageSquareMore
											size={13}
											className={"opacity-35"}
										/>
										<span className={"text-sm text-neutral-400"}>
											{task.comments.length}
										</span>
									</div>
									<div className={"flex items-center gap-1"}>
										<ImageIcon
											size={13}
											className={"opacity-35"}
										/>
										<span className={"text-sm text-neutral-400"}>
											{task.resources.length}
										</span>
									</div>
									<div className={"flex items-center gap-1"}>
										<LinkIcon
											size={13}
											className={"opacity-35"}
										/>
										<span className={"text-sm text-neutral-600"}>
											{task.links.length}
										</span>
									</div>
								</div>
								<div className={"flex items-center gap-2"}>
									<AddSubTask id={task.id} />
									<Link
										href={DashboardPages.TASK_EDIT(task.id)}
										className={
											"border-primary text-primary hover:bg-primary/80 items-center rounded-full border p-1 transition-colors hover:text-white"
										}
									>
										<Pencil size={18} />
									</Link>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		)
	}
)
