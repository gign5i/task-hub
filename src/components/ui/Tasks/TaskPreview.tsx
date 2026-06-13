"use client";
import type {ITask} from "@/types/task.types";
import Image from "next/image";
import {Image as ImageIcon, Link, MessageSquareMore, Pencil, PlusIcon,} from "lucide-react";

export function TaskPreview({ task }: { task: ITask }) {
  const CompletedTasks = task.subTasks.filter(
    (element) => element.isCompleted,
  ).length;
  const TotalTasks = task.subTasks.length;
  const Progress = Math.round((CompletedTasks / TotalTasks) * 100);
  return (
    <div
      className={
        "flex items-center gap-2 p-5 bg-white dark:bg-neutral-800 rounded-2xl"
      }
    >
      <div className={"flex flex-col gap-3 justify-center items-center"}>
        <div className={"flex items-start gap-2"}>
          <div  className={"p-1.5 object-cover flex items-center justify-center bg-primary/30 rounded-full"}>
            <task.icon/>
          </div>
          <div className={"flex flex-col"}>
            <div className={"text-m font-normal"}>{task.title}</div>
            <div className={'text-sm text-neutral-600'}>Due: 2 days</div>
          </div>
          <div className={"flex items-center justify-center -space-x-2"}>
            {task.users.map((user) => (
              <Image
                className={
                  "rounded-full object-contain border-1 border-neutral-200"
                }
                key={`user-${user.id}`}
                src={user.avatarPath || ""}
                width={32}
                height={32}
                alt={`person-avatar-${user.id}`}
              />
            ))}
          </div>
        </div>
        <div>{Progress}%</div>
        <div className={"flex w-full justify-between items-center gap-1"}>
          <div className={"flex items-center gap-2"}>
            <div className={"flex items-center gap-2"}>
              <MessageSquareMore size={13} /> {task.comments.length}
            </div>
            <div className={"flex items-center gap-2"}>
              <ImageIcon size={13} /> {task.resources.length}
            </div>
            <div className={"flex items-center gap-2"}>
              <Link size={13} /> {task.links.length}
            </div>
          </div>
          <div className={"flex items-center gap-2"}>
            <button className={"items-center p-1 bg-primary rounded-full"}>
              <PlusIcon size={18} />
            </button>
            <button
              className={
                " items-center p-1 border-1 border-primary rounded-full"
              }
            >
              <Pencil size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
