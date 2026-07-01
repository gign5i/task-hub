import { MAIN_MENU } from "./config/main-menu.data"
import { StatusConfig } from "./config/select-options.config"
import { formatMinutes } from "./lib/helpers/format-minutes"
import type { IMenuItem } from "./model/interfaces/menu.interface"
import type { IProfile } from "./model/interfaces/profile.interface"
import type { IProjectStat } from "./model/interfaces/project-stats.interface"
import type { IProject } from "./model/interfaces/project.interface"
import type {
	ISubTask,
	ITask,
	TSortType,
	TSubTaskFormData
} from "./model/interfaces/task.types"
import type { TTaskType } from "./model/types/taskType.type"
import {useTask} from './lib/hooks/useTask'
import { useAuth } from './lib/hooks/useAuth';
import { TaskEditorSchema, type TTaskEditorSchema } from "./model/schemas/taskEditor.schema";
import { ThemeToggle } from "./ui/ThemeToggle";

export {
	MAIN_MENU,
	StatusConfig,
	TaskEditorSchema,
	type TTaskEditorSchema,
	type IProject,
	type IProfile,
	type ITask,
	type TSortType,
	type ISubTask,
	type TSubTaskFormData,
	type TTaskType,
	type IProjectStat,
	type IMenuItem,
	useTask,
	useAuth,
	formatMinutes,
	ThemeToggle
}
