import type { IProjectStat } from "../model/interfaces/project-stats.interface";
import { LaptopIcon, MonitorDotIcon, WatchIcon } from "lucide-react"

export const PROJECT_STATS_DATA: IProjectStat[] = [
	{
		id: 1,
		number: 92,
		label: "Active Projects",
		bgColor: "bg-violet-200",
		icon: MonitorDotIcon
	},
	{
		id: 2,
		number: 92,
		label: "On Going Projects",
		bgColor: "bg-amber-300",
		icon: LaptopIcon
	},
	{
		id: 3,
		number: 1149,
		label: "Working Hours",
		bgColor: "bg-blue-200",
		icon: WatchIcon
	}
]
