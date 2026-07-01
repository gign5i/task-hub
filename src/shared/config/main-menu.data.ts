import { DashboardPages } from "./dashboard-pages";
import type { IMenuItem } from "../model/interfaces/menu.interface";
import {
	CalendarDays,
	ChartNoAxesColumn,
	LayoutGrid,
	MessageCircleMore,
	Notebook,
	Settings,
	UsersRound
} from "lucide-react"

export const MAIN_MENU: IMenuItem[] = [
	{
		label: "Dashboard",
		icon: LayoutGrid,
		href: DashboardPages.DASHBOARD
	},
	{
		label: "Messages",
		icon: MessageCircleMore,
		href: DashboardPages.MESSAGES
	},
	{
		label: "Insight",
		icon: ChartNoAxesColumn,
		href: DashboardPages.INSIGHT
	},
	{
		label: "Team",
		icon: UsersRound,
		href: DashboardPages.TEAM
	},
	{
		label: "Schedule",
		icon: CalendarDays,
		href: DashboardPages.SCHEDULE
	},
	{
		label: "Report",
		icon: Notebook,
		href: DashboardPages.REPORT
	},
	{
		label: "Settings",
		icon: Settings,
		href: DashboardPages.SETTINGS
	}
]