import Link from "next/link";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { useEffect } from "react";

export default function Country({ country }) {
  function handleCapital(country) {
    if (typeof country?.capital === "object" && country?.capital?.length > 1)
      return country?.capital?.join(", ");
    else if (!country?.capital) return "No capital";
    else return country?.capital;
  }

  // let selCountry;
  // function loadFeedbackDetails(id) {
  //   fetch(`/api/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => (selCountry = data.selectedCountry));
  // }

  // useEffect(() => {
  //   // loadFeedbackDetails(country.name.common);
  // }, []);

  return (
    <Link href={`/${country?.name?.common}`}>
      <div className="grid place-items-center cursor-pointer md:px-1">
        <m.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="my-4 w-4/5 sm:min-w-full"
        >
          <m.div
            whileHover={{ scale: 0.95 }}
            className="country-shadow rounded-t-md"
          >
            <div className="h-44 rounded-t-md relative overflow-hidden">
              <Image
                src={country?.flags?.svg}
                alt={country?.name?.common}
                className="h-full rounded-t-md object-cover"
                width={400}
                height={250}
              />
            </div>
            <div className="pt-6 pb-10 px-6 rounded-b-md bg-white dark:bg-d-mode-el transition-all">
              <h1 className="font-bold text-lg pb-2 dark:text-l-mode-bg">
                {country?.name?.common}
              </h1>
              <p className="font-semibold text-sm dark:text-white">
                Population:{" "}
                <span className="font-light text-d-mode-el dark:text-l-mode-bg transition-all">
                  {new Intl.NumberFormat("en-us").format(country?.population)}
                </span>
              </p>
              <p className="font-semibold text-sm dark:text-white">
                Region:{" "}
                <span className="font-light text-d-mode-el dark:text-l-mode-bg transition-all">
                  {country?.region}
                </span>
              </p>
              <p className="font-semibold text-sm dark:text-white">
                Capital:{" "}
                <span className="font-light text-d-mode-el dark:text-l-mode-bg transition-all">
                  {handleCapital(country)}
                </span>
              </p>
            </div>
          </m.div>
        </m.div>
      </div>
    </Link>
  );
}
