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

import type { TSortType } from "@/types/task.types"

const options: Array<TSortType> = ["asc", "desc"]

export function SortByDueDate({
	sortByDueDate,
	setSortByDueDate
}: {
	sortByDueDate: TSortType
	setSortByDueDate: Dispatch<SetStateAction<TSortType>>
}) {
	return (
		<div>
			<Select
				value={sortByDueDate}
				onValueChange={value => setSortByDueDate(value || "asc")}
			>
				<SelectTrigger className="w-full max-w-48 bg-white">
					<SelectValue placeholder="Sort by due date" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Variants</SelectLabel>
						{options.map(configItm => (
							<SelectItem
								key={`config-${configItm}`}
								value={configItm}
							>
								{configItm === "asc" ? "Ascending" : "Descending"}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}
