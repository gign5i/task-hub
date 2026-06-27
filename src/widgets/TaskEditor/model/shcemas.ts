import { z } from "zod"

import { ICON_NAMES } from "@/app/dashboard/@modals/(.)task/[id]/edit/task-icons.data"

export const TaskEditorSchema = z.object({
	title: z.string().min(1, "Title is required"),

	icon: z.enum(ICON_NAMES, {
		error: "Incorrect icon"
	}),
	deuDate: z.date()
})

export type TTaskEditorSchema = z.infer<typeof TaskEditorSchema>
