import type {IProjectStat} from "@/app/dashboard/project-stats/project-stats.type";
import clsx from "clsx";
import {formatMinutes} from "@/utils/format-minutes";

interface Props {
  projectStat: IProjectStat;
}

export function ProjectStatCard({ projectStat }: Props) {
  return (
    <div
      className={clsx(
        projectStat.bgColor,
        "rounded-2xl p-5 relative overflow-hidden shadow-md items-center h-full",
      )}
    >
      <div className={"flex items-center justify-between relative z-10"}>
        <div className={"flex flex-col"}>
          <span className={"text-3xl font-semibold mb-1"}>
            {projectStat.id === 3 ? formatMinutes(projectStat.number) : projectStat.number}
          </span>
          <span className={" text-sm"}>{projectStat.label}</span>
        </div>
        <div className={"flex-shrink-0 ml-4"}>
          <projectStat.icon
            size={60}
            className={"flex-shrink-0 ml-4 text-primary"}
          />
        </div>
      </div>
    </div>
  );
}
