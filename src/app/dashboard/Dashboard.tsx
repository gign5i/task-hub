"use client"
import { SearchField } from "@/features"
import { Heading } from "@/shared/ui/Heading"
import dynamic from "next/dynamic"

import { ProjectStatisticsChart } from "@/app/dashboard/project-chart/ProjectStatisticsChart"
import { ProjectStats } from "@/app/dashboard/project-stats/ProjectStats"

import { LastTasks } from "@/entities/task/ui/LastTasks"

const DynamicThemeToggle = dynamic(
	() =>
		import("@/components/layout/sidebar/ThemeToggle").then(
			mod => mod.ThemeToggle
		),
	{
		ssr: false
	}
)

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
						<DynamicThemeToggle />
					</div>
				</div>
				<div className={"grid grid-cols-[25%_75%] gap-6"}>
					<ProjectStats />
					<ProjectStatisticsChart />
				</div>
				<LastTasks />
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
