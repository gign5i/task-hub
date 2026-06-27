import { PROFILE } from "@shared/MOCKS/profile.data"
import { ChevronDown } from "lucide-react"

export function SidebarProfile() {
	return (
		<div className={"mb-10 flex items-center justify-between"}>
			<div className={"bg-primary h-7 w-7 shrink-0 rounded-full"} />
			<div className={"leading-snug"}>
				<div className={"font-medium dark:text-neutral-100"}>
					{PROFILE.name}
				</div>
				<div className={"text-xs font-medium opacity-60 dark:text-neutral-100"}>
					{PROFILE.email}
				</div>
			</div>
			<div className={"ml-1"}>
				<ChevronDown
					size={18}
					className={"opacity-70 dark:text-neutral-100"}
				/>
			</div>
		</div>
	)
}