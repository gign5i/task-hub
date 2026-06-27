import type { ITask } from "../model/interfaces/task.types"
import { PROFILES } from "@shared/MOCKS/profiles.data"

export const TASKS: Array<ITask> = [
	{
		id: "1",
		icon: "ShoppingBasket",
		title: "Travel app user flow",
		deuDate: new Date(new Date().getTime() + 3 * 24 * 24 * 60 * 60 * 1000),
		comments: ["comment 1", "comment 2", "comment 3", "comment 4"],
		resources: ["", "", "", "", "", ""],
		links: ["https://example.com", "https://example.org"],
		users: [PROFILES[0], PROFILES[1], PROFILES[2]],
		subTasks: [
			{
				id: "1",
				title: "subtask1",
				isCompleted: false
			},
			{
				id: "2",
				title: "subtask2",
				isCompleted: true
			},
			{
				id: "3",
				title: "subtask3",
				isCompleted: false
			},
			{
				id: "4",
				title: "subtask4",
				isCompleted: true
			}
		]
	},
	{
		id: "2",
		icon: "Plane",
		title: "Ecommerce app user flow",
		deuDate: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000),
		comments: ["comment 1", "comment 2", "comment 3"],
		resources: ["", "", "", ""],
		links: ["https://example.com", "https://example.org"],
		users: [PROFILES[1], PROFILES[2], PROFILES[3]],
		subTasks: [
			{
				id: "1",
				title: "subtask1",
				isCompleted: true
			}
		]
	},
	{
		id: "3",
		icon: "Briefcase",
		title: "Smartphone app user flow",
		deuDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
		comments: ["comment 1", "comment 2", "comment 3"],
		resources: ["", "", "", "", ""],
		links: ["https://example.com"],
		users: [PROFILES[1], PROFILES[2], PROFILES[3]],
		subTasks: [
			{
				id: "1",
				title: "subtask1",
				isCompleted: true
			},
			{
				id: "2",
				title: "subtask2",
				isCompleted: true
			},
			{
				id: "3",
				title: "subtask2",
				isCompleted: true
			},
			{
				id: "4",
				title: "subtask2",
				isCompleted: true
			},
			{
				id: "5",
				title: "subtask2",
				isCompleted: false
			}
		]
	}
]
