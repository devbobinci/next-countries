export default function RegionList({
  setSelectedRegion,
  regionList,
  setRegionList,
  setQuery,
}) {
  return (
    <div
      className={`${
        regionList
          ? "scale-100 rotate-0 translate-y-0"
          : "scale-0 -rotate-90 -translate-y-24"
      } absolute z-[2] w-2/3 md:w-full py-4 px-6 bg-white mt-1 rounded-md shadow-md transition-all duration-300 dark:bg-d-mode-el`}
    >
      <ul className="font-light text-sm dark:text-l-mode-bg">
        <li
          onClick={() => {
            setSelectedRegion("Africa");
            setRegionList((prev) => !prev);
            setQuery("");
          }}
          className="py-1 cursor-pointer"
        >
          Africa
        </li>
        <li
          onClick={() => {
            setSelectedRegion("America");
            setRegionList((prev) => !prev);
            setQuery("");
          }}
          className="py-1 cursor-pointer"
        >
          America
        </li>
        <li
          onClick={() => {
            setSelectedRegion("Asia");
            setRegionList((prev) => !prev);
            setQuery("");
          }}
          className="py-1 cursor-pointer"
        >
          Asia
        </li>
        <li
          onClick={() => {
            setSelectedRegion("Europe");
            setRegionList((prev) => !prev);
            setQuery("");
          }}
          className="py-1 cursor-pointer"
        >
          Europe
        </li>
        <li
          onClick={() => {
            setSelectedRegion("Oceania");
            setRegionList((prev) => !prev);
            setQuery("");
          }}
          className="py-1 cursor-pointer"
        >
          Oceania
        </li>
      </ul>
    </div>
  );
}
