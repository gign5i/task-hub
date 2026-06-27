"use client"

import { type TTaskEditorSchema, TaskEditorSchema, useTask } from "@/shared"
import { Button } from "@/shared/ui/button"
import { Calendar } from "@/shared/ui/calendar"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/shared/ui/field"
import { Input } from "@/shared/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns/format"
import { Calendar as CalendarIcon } from "lucide-react"
import { observer } from "mobx-react-lite"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

import {
	ICON_MAP,
	ICON_NAMES
} from "@/app/dashboard/@modals/(.)task/[id]/edit/task-icons.data"

export const TaskEditor = observer(({ id }: { id: string }) => {
	const { back } = useRouter()
	const { getTaskById, updateTask } = useTask()
	const methods = useForm<TTaskEditorSchema>({
		defaultValues: {
			deuDate: new Date(),
			title: ""
		},
		resolver: zodResolver(TaskEditorSchema)
	})

	const { handleSubmit, control, reset } = methods

	const onSubmit = (data: TTaskEditorSchema) => {
		console.log("data", data)
		updateTask(id, data)
		toast.info("Task updated successfully")
		back()
	}

	useEffect(() => {
		const task = getTaskById(id)
		if (!task) return

		reset({
			deuDate: task.deuDate,
			title: task.title,
			icon: task.icon
		})
	}, [id])

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
									<PopoverTrigger
										render={
											<Button
												variant={"outline"}
												data-empty={""}
												className={
													"data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
												}
											>
												<CalendarIcon />
												{value ? (
													format(value, "PPP")
												) : (
													<span>Pick a date</span>
												)}
											</Button>
										}
									></PopoverTrigger>
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
					redact
				</Button>
			</form>
		</div>
	)
})
