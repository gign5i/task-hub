import {PROJECTS} from "@/components/layout/data/projects.data";
import clsx from "clsx";

export function SidebarProjects() {
  return (
    <div>
      <ul className={"space-y-3 pl-4 mt-3"}>
        {PROJECTS.map((item) => (
          <li key={item.id} className={"flex items-center gap-2"}>
            <div className={clsx(item.color, "w-3 h-3 rounded-full")} />
            <span className={'text-neutral-400 dark:text-neutral-100'}>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
