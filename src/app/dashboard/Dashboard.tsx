"use client"
import { LastTasks } from "@/entities/task"
import { SearchField } from "@/features/SearchField"
import { Heading } from "@/shared/ui/Heading"
import { TaskTimeLine } from "@/widgets/TaskTimeLine"

import { ProjectStatisticsChart } from "@/app/dashboard/project-chart/ProjectStatisticsChart"
import { ProjectStats } from "@/app/dashboard/project-stats/ProjectStats"

export function Dashboard() {
	return (
		<div className={"grid grid-cols-[2.5fr_1fr]"}>
			<div>
				<div className={"mb-6 flex items-center justify-between"}>
					<Heading>Dashboard</Heading>
					<div className={"flex gap-2.5"}>
						<SearchField
							value={""}
							onChange={() => {}}
						/>
					</div>
				</div>
				<div className={"grid grid-cols-[25%_75%] gap-6"}>
					<ProjectStats />
					<ProjectStatisticsChart />
				</div>
				<LastTasks />
				<TaskTimeLine />
			</div>
			<div
				className={
					"ml-15 flex items-center justify-center bg-violet-200 p-5 text-center text-neutral-900"
				}
			>
				CHAT
			</div>
		</div>
	)
}
