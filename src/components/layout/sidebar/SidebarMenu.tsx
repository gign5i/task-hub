import {MAIN_MENU} from "@/components/layout/data/main-menu.data";
import Link from "next/link";

export function SidebarMenu() {
  return (
    <nav className={"mb-8 mt-"}>
      <ul className={"space-y-4"}>
        {MAIN_MENU.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={
                "text-neutral-500 dark:text-neutral-100 flex items-center justify-between hover:text-neutral-900 hover:dark:text-neutral-400 transition-colors pl-4"
              }
            >
              <span className={'flex items-center'}>
                <item.icon size={20} className={"mr-2"} />
              <span>{item.label}</span>
              </span>
              {item.label === "Messages" && <span className={'text-primary bg-[#DCDEF6] rounded-lg px-2 text-xs font-medium'}>4</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
