import CountryDetail from "./country-detail";
import CountryDetailValue from "./country-detail-value";

const COUNTRY_DETAILS_1 = [
  "Native Name: ",
  "Population: ",
  "Region: ",
  "Sub Region: ",
  "Capital: ",
];
const COUNTRY_DETAILS_2 = ["Top Level Domain: ", "Currencies: ", "Languages: "];

export default function CountryDetails({ country }) {
  const VALUES_1 = [
    {
      value: `${
        !country?.name?.nativeName
          ? "There is no native name"
          : Object.values(country?.name?.nativeName)[0].official
      }`,
    },
    {
      value: new Intl.NumberFormat("en-us").format(country?.population),
    },
    {
      value: `${country?.region}`,
    },
    {
      value: `${
        country?.subregion ? country.subregion : "There is no sub region"
      }`,
    },
    {
      value: `${country?.capital ? country.capital : "There is no capital"}`,
    },
  ];

  const VALUES_2 = [
    {
      value: `${
        country?.tld?.length > 0
          ? country?.tld?.map((tld) => {
              return ` ${tld}`;
            })
          : country?.tld
      }`,
    },
    {
      value: `${
        !country?.currencies
          ? "There is no currency"
          : Object.values(country?.currencies).map((currency) => {
              if (Object.values(country?.currencies).length - 1)
                return ` ${currency.name}`;
              return currency.name;
            })
      }`,
    },
    {
      value: `${
        !country?.languages
          ? "There are no languages"
          : Object.values(country?.languages)
              .sort()
              .map((lang) => {
                if (Object.values(country?.languages).length - 1)
                  return ` ${lang}`;
                return lang;
              })
      }`,
    },
  ];

  return (
    <div className="w-full">
      <h1 className="dark:text-white text-black text-[30px] font-bold mb-6">
        {country?.name?.common}
      </h1>

      <div>
        <div className="md:flex w-full justify-start md:gap-16 xl:gap-24">
          <div>
            {COUNTRY_DETAILS_1.map((detail, idx) => {
              return (
                <CountryDetail key={idx} idx={idx}>
                  {detail}
                  <CountryDetailValue>{VALUES_1[idx].value}</CountryDetailValue>
                </CountryDetail>
              );
            })}
          </div>
          <div className="mt-10 md:mt-0 xl:mt-0">
            {COUNTRY_DETAILS_2.map((detail, idx) => {
              return (
                <CountryDetail key={idx} idx={idx}>
                  {detail}
                  <CountryDetailValue>{VALUES_2[idx].value}</CountryDetailValue>
                </CountryDetail>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
