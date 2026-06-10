"use client";
import {Heading} from "@/components/ui/Heading";
import {SearchField} from "@/components/ui/search-field/SearchField";
import dynamic from "next/dynamic";
import {ProjectStats} from "@/app/dashboard/project-stats/ProjectStats";
import {ProjectStatisticsChart} from "@/app/dashboard/project-chart/ProjectStatisticsChart";

const DynamicThemeToggle = dynamic(
  () =>
    import("@/components/layout/sidebar/ThemeToggle").then(
      (mod) => mod.ThemeToggle,
    ),
  {
    ssr: false,
  },
);

export function Dashboard() {
  return (
    <div className={'grid grid-cols-[2.5fr_1fr]'}>
      <div>
        <div className={"flex items-center justify-between mb-6"}>
          <Heading>Dashboard</Heading>
          <div className={"flex gap-2.5"}>
            <SearchField value={""} onChange={() => {}} />
            <DynamicThemeToggle />
          </div>
        </div>
        <div className={"grid grid-cols-[25%_75%] gap-6"}>
          <ProjectStats />
          <ProjectStatisticsChart />
        </div>
      </div>
      <div className={'p-5 bg-violet-200 ml-5 h-screen flex items-center justify-center text-center text-neutral-900'}>CHAT</div>
    </div>
  );
}
