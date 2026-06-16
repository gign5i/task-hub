import { CheckCircle } from "lucide-react"
import { useMemo } from "react"

export function ProgressBar({ progress }: { progress: number }) {
	const clamped = Math.min(100, Math.max(0, progress))

	const progressContent = useMemo(() => {
		if (clamped >= 100)
			return (
				<>
					<CheckCircle
						size={16}
						className={"mr-1 text-neutral-100"}
					/>
					Done
				</>
			)

		return `${clamped}%`
	}, [progress])

	const progressColor = useMemo(() => {
		if (clamped >= 100) return "bg-emerald-500"
		if (clamped >= 75) return "bg-amber-500"
		if (clamped >= 50) return "bg-primary"
		if (clamped >= 25) return "bg-rose-500"

		return "bg-neutral-300"
	}, [progress])

	return (
		<div
			className={`bg-primary/10 relative h-12 w-full overflow-hidden rounded-full`}
		>
			<div
				className={`animate-stripes flex h-full items-center justify-center rounded-full bg-[length:56px_56px] font-medium text-white ${progressColor}`}
				style={{
					width: `${clamped}%`,
					backgroundImage:
						"repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 20px, transparent 20px, transparent 40px)"
				}}
			>
				{progressContent}
			</div>
		</div>
	)
}
