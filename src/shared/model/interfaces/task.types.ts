import type { IProfile } from "./profile.interface"

import type { TIconName } from "@/app/dashboard/@modals/(.)task/[id]/edit/task-icons.data"

export interface ISubTask {
	id: string
	title: string
	isCompleted: boolean
}

export interface ITask extends Omit<ISubTask, "isCompleted"> {
	// icon: LucideIcon
	icon: TIconName
	deuDate: {
		date: Date,
		startTime?: Date,
		endTime?: Date
	}
	users: Array<IProfile>
	subTasks: Array<ISubTask>
	comments: Array<string>
	resources: Array<string>
	links: Array<string>
}

export type TSubTaskFormData = Pick<ISubTask, "title">

export type TSortType = "asc" | "desc"
