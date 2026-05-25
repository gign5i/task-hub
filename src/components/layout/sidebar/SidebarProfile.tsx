import {PROFILE} from "@/components/layout/data/profile.data";
import {ChevronDown} from "lucide-react";

export function SidebarProfile() {
  return (
    <div className={'mb-10 flex items-center justify-between'}>
      <div className={'w-7 h-7 bg-primary rounded-full shrink-0'} />
      <div className={'leading-snug'}>
        <div className={'font-medium dark:text-neutral-100'}>{PROFILE.name}</div>
        <div className={'opacity-60 text-xs font-medium dark:text-neutral-100'}>{PROFILE.email}</div>
      </div>
      <div className={'ml-1'}>
        <ChevronDown  size={18} className={'opacity-70 dark:text-neutral-100'} />
      </div>
    </div>
  )
}