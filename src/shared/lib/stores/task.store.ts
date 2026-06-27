import type { TTaskEditorSchema } from "@/shared/model/schemas/taskEditor.schema";
import { TASKS } from "../../MOCKS/tasks.data"
import type {
	ITask,
	TSortType,
	TSubTaskFormData
} from "../../model/interfaces/task.types"
import type { TTaskType } from "../../model/types/taskType.type"
import { makeAutoObservable } from "mobx"

class TaskStore {
	tasks: Array<ITask> = TASKS;

	status: TTaskType | null = null
	sortByDueDate: TSortType = "asc"

	constructor() {
		this.tasks = TASKS.map((item) =>({
				...item,
				subTasks: [...item.subTasks]	
			}));
		makeAutoObservable(this)
	}

	get sortedTask() {
		let filtered = this.tasks

		if (this.status) {
			filtered = filtered.filter(task => {
				switch (this.status) {
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
		}

		return filtered.slice().sort((a, b) => {
			const dateA = new Date(a.deuDate).getDate()
			const dateB = new Date(b.deuDate).getDate()

			if (this.sortByDueDate === "asc") {
				return dateA - dateB
			} else {
				return dateB - dateA
			}
		})
	}

	getTaskById(id: string): ITask | undefined {
		console.log('id: ', id);
		console.log('tasks: ', this.tasks);
		return this.tasks.find(task => task.id === id)
	}

	updateTask(id: string, updatedTask: TTaskEditorSchema): void {
		const taskIndex = this.tasks.findIndex(task => task.id === id)
		if (taskIndex === -1) return

		this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask }
	}

	addSubTask(id: string, subTask: TSubTaskFormData) {
		const task = this.getTaskById(id)
		if (!task) return
		if (!task.subTasks) {
			task.subTasks = []
		}
		const newSubTask = {
			id: crypto.randomUUID(),
			title: subTask.title,
			isCompleted: false
		}
		task.subTasks.push(newSubTask)
	}

	setStatus(status: TTaskType | null) {
		this.status = status
	}

	setSortByDueDate(sortType: TSortType) {
		this.sortByDueDate = sortType
	}
}

export const taskStore = new TaskStore()
