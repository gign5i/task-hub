"use client"
import { useAuth } from "@/shared"
import { authStore } from "@/shared/lib/stores/auth.store"
import { Button } from "@/shared/ui/button"
import { PROFILE } from "@shared/MOCKS/profile.data"
import { ChevronDown, LogOut } from "lucide-react"
import { observer } from "mobx-react-lite"
import { useTransitionRouter } from "next-view-transitions"

export const SidebarProfile = observer(() => {
	const { isLoggedIn, logout } = useAuth()
	console.log("isLoggedIn: ", isLoggedIn)
	const router = useTransitionRouter()
	return (
		<div className={"mb-10 flex items-center justify-between"}>
			<div className={"bg-primary h-7 w-7 shrink-0 rounded-full"} />
			{authStore.isLoggedIn && (
				<div className={"leading-snug"}>
					<div className={"font-medium dark:text-neutral-100"}>
						{PROFILE.name}
					</div>
					<div
						className={"text-xs font-medium opacity-60 dark:text-neutral-100"}
					>
						{PROFILE.email}
					</div>
				</div>
			)}
			<Button
				variant={"ghost"}
				onClick={() => {
					logout()
					router.replace("/login")
				}}
			>
				<LogOut />
			</Button>
			<div className={"ml-1"}>
				<ChevronDown
					size={18}
					className={"opacity-70 dark:text-neutral-100"}
				/>
			</div>
		</div>
	)
})
