import { useEffect, useState, useMemo } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { Fragment } from "react";

import { getAllCountries } from "@/helpers/api-util";
import Country from "./Country";

export default function Countries({ selectedRegion, query }) {
  const [countries, setCountries] = useState([]);

  async function getCountries() {
    const allCountries = await getAllCountries();
    setCountries(allCountries);
  }

  useEffect(() => {
    getCountries();
  }, []);

  const filteredCountries = useMemo(() => {
    return countries?.filter((country) => {
      return country?.name?.common.toLowerCase().includes(query.toLowerCase());
    });
  }, [countries, query]);

  const filteredRegion = useMemo(() => {
    return countries?.filter((country) => {
      return country?.region
        .toLowerCase()
        .includes(selectedRegion.toLowerCase());
    });
  }, [countries, selectedRegion]);

  const renderFilteredCountries = filteredCountries?.map((country) => {
    return <Country key={country.cca3} country={country} />;
  });

  return (
    <AnimatePresence>
      <main className="px-4 py-8 md:px-12 xl:px-24 select-none">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`mx-auto max-w-[1600px] transition-all overflow-y-hidden ${
            filteredCountries?.length > 0 || filteredRegion?.length < 0
              ? "grid place-items-center gap-2 sm:gap-12 xl:gap-18 2xl:gap-20 3xl:gap-28 sm:place-items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {!selectedRegion ? (
            <Fragment>
              {query.length > 0 ? (
                <Fragment>
                  {filteredCountries.length > 0 ? (
                    <Fragment>{renderFilteredCountries}</Fragment>
                  ) : (
                    <p className="dark:text-l-mode-bg text-xl">
                      There is no country with name:{" "}
                      <span className="italic text-2xl">
                        &apos;{query}&apos;
                      </span>
                    </p>
                  )}
                </Fragment>
              ) : (
                <>
                  {filteredCountries.length !== 0 ? (
                    <>{renderFilteredCountries}</>
                  ) : (
                    <p className="dark:text-l-mode-bg text-xl text-center">
                      Loading...
                    </p>
                  )}
                </>
              )}
            </Fragment>
          ) : (
            <>
              {filteredRegion.map((country) => {
                return <Country key={country.cca3} country={country} />;
              })}
            </>
          )}
        </m.div>
      </main>
    </AnimatePresence>
  );
}
