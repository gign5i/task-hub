import { PROJECTS } from "@shared/MOCKS/projects.data"
import clsx from "clsx"

export function SidebarProjects() {
	return (
		<div>
			<ul className={"mt-3 space-y-3 pl-4"}>
				{PROJECTS.map(item => (
					<li
						key={item.id}
						className={"flex items-center gap-2"}
					>
						<div className={clsx(item.color, "h-3 w-3 rounded-full")} />
						<span className={"text-neutral-400 dark:text-neutral-100"}>
							{item.name}
						</span>
					</li>
				))}
			</ul>
		</div>
	)
}
