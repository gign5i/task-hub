import { MAIN_MENU } from "@/shared"
import Link from "next/link"

export function SidebarMenu() {
	return (
		<nav className={"mt- mb-8"}>
			<ul className={"space-y-4"}>
				{MAIN_MENU.map(item => (
					<li key={item.href}>
						<Link
							href={item.href}
							className={
								"flex items-center justify-between pl-4 text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-100 hover:dark:text-neutral-400"
							}
						>
							<span className={"flex items-center"}>
								<item.icon
									size={20}
									className={"mr-2"}
								/>
								<span>{item.label}</span>
							</span>
							{item.label === "Messages" && (
								<span
									className={
										"text-primary rounded-lg bg-[#DCDEF6] px-2 text-xs font-medium"
									}
								>
									4
								</span>
							)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
