import {SidebarHeading} from "@/components/layout/sidebar/SidebarHeading";
import {SidebarProfile} from "@/components/layout/sidebar/SidebarProfile";
import {SidebarMenu} from "@/components/layout/sidebar/SidebarMenu";
import {SidebarProjects} from "@/components/layout/sidebar/SidebarProjects";

export function Sidebar() {
  return (
    <aside className={"p-5 bg-white dark:bg-neutral-800"}>
      <SidebarHeading title={"Profile"} />
      <SidebarProfile />

      <SidebarHeading title={"Menu"} />
      <SidebarMenu />

      <SidebarHeading title={"Projects"} />
      <SidebarProjects />
    </aside>
  );
}
