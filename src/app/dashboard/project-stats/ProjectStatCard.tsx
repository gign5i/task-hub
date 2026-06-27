import { type IProjectStat, formatMinutes } from "@/shared"
import clsx from "clsx"

interface Props {
	projectStat: IProjectStat
}

export function ProjectStatCard({ projectStat }: Props) {
	return (
		<div
			className={clsx(
				projectStat.bgColor,
				"relative h-full items-center overflow-hidden rounded-2xl p-5 shadow-md"
			)}
		>
			<div className={"relative z-10 flex items-center justify-between"}>
				<div className={"flex flex-col"}>
					<span className={"mb-1 text-3xl font-semibold"}>
						{projectStat.id === 3
							? formatMinutes(projectStat.number)
							: projectStat.number}
					</span>
					<span className={"text-sm"}>{projectStat.label}</span>
				</div>
				<div className={"ml-4 flex-shrink-0"}>
					<projectStat.icon
						size={60}
						className={"text-primary ml-4 flex-shrink-0"}
					/>
				</div>
			</div>
		</div>
	)
}
