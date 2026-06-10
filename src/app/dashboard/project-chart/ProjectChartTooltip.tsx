export function ProjectChartTooltip({
  active = false,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ value: number }>;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div
      className={"bg-primary py-1.5 px-2.5 rounded-xl shadow text-sm text-neutral-200 "}
    >
      {payload[0].value} Projects
    </div>
  );
}
