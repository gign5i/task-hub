"use client";

import {useState} from "react";
import type {ITimeRange} from "@/app/dashboard/project-chart/project-chart.types";
import {ProjectChartHeader} from "@/app/dashboard/project-chart/ProjectChartHeader";
import {ProjectChart} from "@/app/dashboard/project-chart/ProjectChart";
import {monthlyData, yearlyData} from "@/app/dashboard/project-chart/project-chart.data";

export function ProjectStatisticsChart() {
  const [rangeType, setRangeType] = useState<ITimeRange>({
    label: "Yearly",
    value: "yearly",
  });

  const selectedDataRange = rangeType.value === "yearly" ? yearlyData : monthlyData;

  return (
    <div className=' h-full bg-white p-5 rounded-2xl dark:bg-neutral-800'>
      <ProjectChartHeader
        rangeType={rangeType}
        setRangeType={setRangeType}
      />
      <ProjectChart data={selectedDataRange} />
    </div>
  );
}
