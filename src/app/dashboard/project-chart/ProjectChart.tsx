import {useMemo} from "react";
import type {IChartDataPoint} from "@/app/dashboard/project-chart/project-chart.types";
import {Area, AreaChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis,} from "recharts";
import {ProjectChartTooltip} from "@/app/dashboard/project-chart/ProjectChartTooltip";

export function ProjectChart({ data }: { data: Array<IChartDataPoint> }) {
  const maxData = useMemo(() => {
    if (!data?.length) return null;
    let maxValue = 0;
    let maxPeriod = "";

    data.forEach((item) => {
      if (item.value > maxValue) {
        maxValue = item.value;
        maxPeriod = item.period;
      }
    });
    return { value: maxValue, period: maxPeriod };
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height={290}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: -35, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#725bf2" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#725bf2" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="0" vertical={true} stroke={"#f3f4f6"} />

        <XAxis
          dataKey="period"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: '0.7rem', fontWeight: '500', fill: "#9ca3af" }}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{  fontSize: '0.7rem', fontWeight: '500', fill: "#9ca3af" }}
          domain={[0, "dataMax + 10"]}
        />

        <Tooltip content={<ProjectChartTooltip />} cursor={false} />

        {maxData && (
          <ReferenceLine
            x={maxData.period}
            stroke={"#6366f1"}
            strokeDasharray="5 5"
            strokeWidth={2.5}
            opacity={0.5}
          />
        )}

        <Area
          type="bump"
          dataKey="value"
          stroke={'#6366f1'}
          strokeWidth={1}
          fillOpacity={1}
          fill={'url(#colorGradient)'}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
