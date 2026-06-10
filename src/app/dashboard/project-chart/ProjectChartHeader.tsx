import type {ITimeRange} from "@/app/dashboard/project-chart/project-chart.types";
import {type Dispatch, type SetStateAction, useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {timeRangeData} from "@/app/dashboard/project-chart/project-chart.data";

export function ProjectChartHeader({
  rangeType,
  setRangeType,
}: {
  rangeType: ITimeRange;
  setRangeType: Dispatch<SetStateAction<ITimeRange>>;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onHandleChange = (range: ITimeRange) => {
    setIsDropdownOpen(!isDropdownOpen);
    setRangeType(range);
  };

  return (
    <div className="flex items-center justify-between mb-6 ">
      <h2 className={"text-xl font-medium"}>Projects Statistics</h2>
      <div className="relative">
        <button
          className={'flex items-center gap-2 px-3 py-1.5 text-sm rounded-2xl border border-neutral-200'}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          {rangeType.label}
          {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {
          isDropdownOpen && (
            <div className={'absolute right-0 mt-2 w-32 bg-white rounded-2xl border border-neutral-200 py-1 z-10 dark:bg-neutral-800'}>
              {
                timeRangeData.map((item) => (
                  <button
                    key={`item-${item.value}`}
                    className={'w-full px-3 py-2 text-sm text-left transition-colors hover:text-primary'}
                    onClick={() => onHandleChange(item)}
                  >
                    {item.label}
                  </button>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  );
}
