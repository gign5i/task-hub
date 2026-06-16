import type { Dispatch, SetStateAction } from "react"

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"

import type { TTaskType } from "@/types/task.types"

import { StatusConfig } from "@/config/select-options.config"

export function FilterByStatus({
	taskType,
	setTaskType
}: {
	taskType: TTaskType | null
	setTaskType: Dispatch<SetStateAction<TTaskType | null>>
}) {
	return (
		<Select
			items={StatusConfig}
			highlightItemOnHover={false}
			value={taskType === null ? "all" : taskType}
			onValueChange={value => setTaskType(value === "all" ? null : value)}
		>
			<SelectTrigger className="w-full max-w-48 bg-white">
				<SelectValue placeholder="All" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Statuses</SelectLabel>
					{StatusConfig.map(configItm => (
						<SelectItem
							className={`hover:text-primary select-none:text-primary hover:bg-white ${taskType === configItm.value && "text-primary"}`}
							key={`config-${configItm.value}`}
							value={configItm.value}
						>
							{configItm.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
