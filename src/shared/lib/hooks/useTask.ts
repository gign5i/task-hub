import type {  TSortType, TSubTaskFormData } from "@/shared/model/interfaces/task.types";
import { taskStore } from "../stores/task.store";
import type { TTaskType } from "@/shared/model/types/taskType.type";
import type { TTaskEditorSchema } from "@/shared/model/schemas/taskEditor.schema";

export const useTask = () => {
  const status = taskStore.status
  const sortByDueDate = taskStore.sortByDueDate
  const getTaskById = (id: string) => taskStore.getTaskById(id);
  const updateTask = (id: string, updatedInfo: TTaskEditorSchema) => taskStore.updateTask(id, updatedInfo)
  const addSubTask = (id: string, subTask: TSubTaskFormData) => taskStore.addSubTask(id, subTask)
  const setTaskStatus = (status: TTaskType | null) => taskStore.setStatus(status)
  const setSortByDueDate = (sortType: TSortType) => taskStore.setSortByDueDate(sortType)
  const sortedTasks = taskStore.sortedTask
  const todayTasks = taskStore.todayTasks
  
  return {status, sortByDueDate, sortedTasks, todayTasks, getTaskById, updateTask, addSubTask, setTaskStatus, setSortByDueDate};
};