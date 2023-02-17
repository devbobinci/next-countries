import { useState, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";
import { getCountryByRegion } from "../../helpers/api-util";
import RegionList from "./region-list";

export default function Region({
  selectedRegion,
  setSelectedRegion,
  setQuery,
}) {
  const [regionList, setRegionList] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setRegionList((prev) => !prev)}
        className="mt-8 md:mt-0 py-4 px-6 w-2/3 md:w-full flex items-center justify-between rounded-md shadow-md transition-all bg-white dark:bg-d-mode-el"
      >
        <p className="font-light text-sm dark:text-l-mode-bg">
          {selectedRegion
            ? `Filtered by ${selectedRegion}`
            : "Filter by Region"}
        </p>
        <HiChevronDown
          className={`${
            regionList ? "rotate-180" : "rotate-0"
          } dark:text-l-mode-bg md:ml-6 xl:ml-12 transition-all duration-300`}
        />
      </div>

      <RegionList
        setSelectedRegion={setSelectedRegion}
        regionList={regionList}
        setRegionList={setRegionList}
        setQuery={setQuery}
      />
    </div>
  );
}
