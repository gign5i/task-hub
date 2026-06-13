import type {ITask} from "@/types/task.types";
import {TASKS} from "@/MOCKS/tasks.data";
import {TaskPreview} from "@/components/ui/Tasks/TaskPreview";

export function LastTasks() {
  // if (!tasks.length)
  //   return <div className={"mt-4 text-center text-xs"}>No last tasks</div>;

  return (
    <div className={"mt-6"}>
      <h2 className={"text-xl"}>
        Last Tasks <span className={"text-neutral-400"}>({TASKS.length})</span>
      </h2>
      <div className={"flex items-center justify-center gap-4 mt-3 w-full"}>
        {TASKS.map((task: ITask) => (
          <TaskPreview key={`key-${task.id}`} task={task} />
        ))}
      </div>
    </div>
  );
}
