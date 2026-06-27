"use client"

import { useTask } from "@/shared"
import { Button } from "@/shared/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/shared/ui/dialog"
import { Field, FieldLabel } from "@/shared/ui/field"
import { Input } from "@/shared/ui/input"
import { PlusIcon } from "lucide-react"
import { observer } from "mobx-react-lite"
import { useState } from "react"
import { toast } from "sonner"

export const AddSubTask = observer(({ id }: { id: string }) => {
	const { addSubTask } = useTask()
	const [title, setTitle] = useState("")
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const onHandleSubmit = () => {
		if (!title.trim()) {
			toast.error("Please enter a title")
			return
		}
		addSubTask(id, { title })
		setIsOpen(false)
		setTitle("")
		toast.success("Task added successfully")
	}

	return (
		<Dialog
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<DialogTrigger
				className={
					'bg-primary border-primary dark:text-white" hover:border-primary hover:bg-primary/80 items-center rounded-full border p-1 text-white transition-colors'
				}
			>
				<PlusIcon size={18} />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
				</DialogHeader>
				<div className="flex flex-col gap-3 py-2">
					<Field>
						<FieldLabel htmlFor="input-title-subtask">Title</FieldLabel>
						<Input
							id="input-title-subtask"
							placeholder="type title of new sub task"
							value={title}
							onChange={e => setTitle(e.target.value)}
						/>
					</Field>
					<Button
						className={"w-[100%]"}
						onClick={onHandleSubmit}
					>
						Submit
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
})
