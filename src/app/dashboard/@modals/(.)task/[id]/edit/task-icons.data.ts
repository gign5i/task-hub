import {
	BookOpen,
	Briefcase,
	Hammer,
	type LucideIcon,
	Plane,
	ShoppingBasket,
	TabletSmartphone
} from "lucide-react"








export const ICON_NAMES = [
	"Plane",
	"ShoppingBasket",
	"TabletSmartphone",
	"Briefcase",
	"BookOpen",
	"Hammer"
] as const

export type TIconName = (typeof  ICON_NAMES)[number];

export const ICON_MAP: Record<TIconName, LucideIcon> = {
	Plane,
	ShoppingBasket,
	TabletSmartphone,
	Briefcase,
	BookOpen,
	Hammer
}
