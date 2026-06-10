import type {IChartDataPoint, ITimeRange,} from "@/app/dashboard/project-chart/project-chart.types";

export const yearlyData: IChartDataPoint[] = [
  { period: "Jan", value: 19 },
  { period: "Feb", value: 24 },
  { period: "Mar", value: 32 },
  { period: "Apr", value: 16 },
  { period: "May", value: 17 },
  { period: "Jun", value: 22 },
  { period: "Jul", value: 32 },
  { period: "Aug", value: 32 },
  { period: "Sep", value: 32 },
  { period: "Oct", value: 32 },
  { period: "Nov", value: 32 },
  { period: "Dec", value: 32 },
];

export const monthlyData: IChartDataPoint[] = [
  { period: "week - 1", value: 19 },
  { period: "week - 2", value: 24 },
  { period: "week - 3", value: 32 },
  { period: "week - 4", value: 32 },
];

export const timeRangeData: ITimeRange[] = [
  {
    label: "Yearly",
    value: "yearly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
];
