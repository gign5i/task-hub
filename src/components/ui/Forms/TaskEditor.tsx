"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns/format"
import { Calendar as CalendarIcon } from "lucide-react"
import { Controller, useForm } from "react-hook-form"

import {
	ICON_MAP,
	ICON_NAMES
} from "@/app/dashboard/@modals/(.)task/[id]/edit/task-icons.data"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@/components/ui/popover"

import { type TTaskEditorSchema, TaskEditorSchema } from "@/types/shcemas"

export function TaskEditor() {
	const methods = useForm<TTaskEditorSchema>({
		defaultValues: {
			deuDate: new Date(),
			title: ""
		},
		resolver: zodResolver(TaskEditorSchema)
	})

	const { handleSubmit, control, formState } = methods

	const onSubmit = (data: TTaskEditorSchema) => {
		console.log("data", data)
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FieldGroup>
					<Controller
						control={control}
						name={"title"}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={"task-title"}>Название</FieldLabel>
								<Input
									id={"task-title"}
									aria-invalid={fieldState.invalid}
									placeholder={"Some task..."}
									{...field}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<Controller
						control={control}
						name={"deuDate"}
						render={({ field: { value, onChange }, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={"task-title"}>Due date</FieldLabel>
								<Popover>
									<PopoverTrigger>
										<Button
											variant={"outline"}
											data-empty={""}
											className={
												"data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
											}
										>
											<CalendarIcon />
											{value ? format(value, "PPP") : <span>Pick a date</span>}
										</Button>
									</PopoverTrigger>
									<PopoverContent className={"w-auto p-0"}>
										<Calendar
											mode={"single"}
											selected={value}
											onSelect={onChange}
										/>
									</PopoverContent>
								</Popover>
							</Field>
						)}
					/>
					<Controller
						name={"icon"}
						control={control}
						render={({ field: { value, onChange } }) => (
							<Field>
								<FieldLabel htmlFor={"icons-select"}>Icon</FieldLabel>
								<div className={"flex gap-1.5"}>
									{ICON_NAMES.map(name => {
										const Icon = ICON_MAP[name]
										return (
											<Button
												key={`item-button-${name}`}
												onClick={() => onChange(name)}
												variant={value === name ? "default" : "outline"}
												type={"button"}
											>
												<Icon size={18} />
											</Button>
										)
									})}
								</div>
							</Field>
						)}
					/>
				</FieldGroup>
				<Button
					className={"mt-5"}
					type={"submit"}
				>
					Сабмит
				</Button>
			</form>
		</div>
	)
}
