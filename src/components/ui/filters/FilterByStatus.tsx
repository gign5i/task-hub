import { StatusConfig, useTask } from "@/shared"
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

export const FilterByStatus = observer(() => {
	const { status, setTaskStatus } = useTask()
	return (
		<Select
			items={StatusConfig}
			highlightItemOnHover={false}
			value={status === null ? "all" : status}
			onValueChange={value => setTaskStatus(value === "all" ? null : value)}
		>
			<SelectTrigger className="w-full max-w-48 bg-white">
				<SelectValue placeholder="All" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Statuses</SelectLabel>
					{StatusConfig.map(configItm => (
						<SelectItem
							className={`hover:text-primary select-none:text-primary hover:bg-white ${status === configItm.value && "text-primary"}`}
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
})
