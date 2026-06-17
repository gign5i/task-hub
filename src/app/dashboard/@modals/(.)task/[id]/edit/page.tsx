import { TaskEditModalClient } from "./TaskEditModal"

export default async function TaskEditModal({
	params
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	return (
		<div className={"p-6"}>
			<TaskEditModalClient id={id} />
		</div>
	)
}
