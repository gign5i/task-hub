import { type TSortType, useTask } from "@/shared"
import { taskStore } from "@/shared/lib/stores/task.store"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/shared/ui/select"
import { observer } from "mobx-react-lite"

const options: Array<TSortType> = ["asc", "desc"]

export const SortByDueDate = observer(() => {
	const { sortByDueDate, setSortByDueDate } = useTask()

	return (
		<div>
			<Select
				value={sortByDueDate}
				onValueChange={value => setSortByDueDate(!!value ? value : "asc")}
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
})
