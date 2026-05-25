interface Props {
  title: string;
}

export function SidebarHeading({title}: Props) {
  return (
    <div className={'font-semibold mb-1.5 text-neutral-400 opacity-50 dark:text-neutral-100'}>
      {title}
    </div>
  )
}