import {
	SidebarHeading,
	SidebarMenu,
	SidebarProfile,
	SidebarProjects
} from "@/widgets/SideBarsComponents"

export function Sidebar() {
	return (
		<aside className={"bg-white p-5 dark:bg-neutral-800"}>
			<SidebarHeading title={"Profile"} />
			<SidebarProfile />

			<SidebarHeading title={"Menu"} />
			<SidebarMenu />

			<SidebarHeading title={"Projects"} />
			<SidebarProjects />
		</aside>
	)
}
