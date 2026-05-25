import {PROJECT_STATS_DATA} from "@/app/dashboard/data/project-stats.data";
import {ProjectStatCard} from "@/app/dashboard/project-stats/ProjectStatCard";

export function ProjectStats() {
  return (
    <div className={'space-y-4'}>
      {PROJECT_STATS_DATA.map((item) => (
        <ProjectStatCard projectStat={item} key={item.id} />
      ))}
    </div>
  );
}
