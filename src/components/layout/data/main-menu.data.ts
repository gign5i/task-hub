import type {IMenuItem} from "@/components/layout/menu/menu.types";
import {
  CalendarDays,
  ChartNoAxesColumn,
  LayoutGrid,
  MessageCircleMore,
  Notebook,
  Settings,
  UsersRound
} from "lucide-react";
import {Pages} from "@/config/pages";

export const MAIN_MENU: IMenuItem[] = [
  {
    label: "Dashboard",
    icon: LayoutGrid,
    href: Pages.DASHBOARD,
  },
  {
    label: "Messages",
    icon: MessageCircleMore,
    href: Pages.MESSAGES,
  },
  {
    label: "Insight",
    icon: ChartNoAxesColumn,
    href: Pages.INSIGHT,
  },
  {
    label: "Team",
    icon: UsersRound,
    href: Pages.TEAM,
  },
  {
    label: "Schedule",
    icon: CalendarDays,
    href: Pages.SCHEDULE,
  },
  {
    label: "Report",
    icon: Notebook,
    href: Pages.REPORT,
  },
  {
    label: "Settings",
    icon: Settings,
    href: Pages.SETTINGS,
  }
];