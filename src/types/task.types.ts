import type {LucideIcon} from "lucide-react";
import type {IProfile} from "@/types/profile.types";

export interface ISubTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface ITask extends Omit<ISubTask, 'isCompleted'> {
  icon: LucideIcon,
  deuDate: Date,
  users: Array<IProfile>,
  subTasks: Array<ISubTask>,
  comments: Array<string>,
  resources: Array<string>,
  links: Array<string>,
}