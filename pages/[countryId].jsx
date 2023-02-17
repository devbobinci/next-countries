import Link from "next/link";
import Head from "next/head";
import { Fragment } from "react";

import { motion as m } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";

import { getAllCountries, getCountryById } from "@/helpers/api-util";
import CountryDetails from "@/components/countries/country-details/country-details";
import BorderCountries from "@/components/borders/border-countries";
import CountryFlag from "@/components/countries/country-details/country-flag";

export default function CountryPage({ country, borders }) {
  return (
    <Fragment>
      <Head>
        <title>{country?.name?.common}</title>
      </Head>
      <div className="mt-8 px-3 md:mt-12 md:px-12 xl:px-24 transition-all">
        <m.div
          layout
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.4 }}
          className="px-4 max-w-[1600px] mx-auto md:px-0"
        >
          <Link href="/">
            <div className="py-1 px-6 rounded-sm back-btn inline-block h-min cursor-pointer dark:bg-d-mode-el bg-l-mode-bg">
              <div className="flex items-center">
                <span className="mb-0.5">
                  <IoIosArrowRoundBack className="text-3xl mr-1 dark:text-l-mode-bg text-d-mode-bg " />
                </span>
                <span className="text-sm text-d-mode-bg dark:text-l-mode-bg ">
                  Back
                </span>
              </div>
            </div>
          </Link>

          <div className="mt-12 xl:flex justify-between xl:items-center">
            <CountryFlag country={country} />
            <div className="flex flex-col xl:w-[43%]">
              <CountryDetails country={country} />
              <BorderCountries borders={borders} />
            </div>
          </div>
        </m.div>
      </div>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const countryId = params.countryId;
  const country = await getCountryById(countryId);

  const allCountries = await getAllCountries();
  const borders = country?.borders?.map((border) => {
    return allCountries.find((country) => country?.cca3 === border);
  });

  const borderCountryName = borders?.map((border) => {
    return border?.name?.common;
  });

  return {
    props: { country: country || null, borders: borderCountryName || null },
  };
}

export async function getStaticPaths() {
  const countries = await getAllCountries();

  const paths = countries.map((country) => ({
    params: { countryId: country?.name?.common },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}
