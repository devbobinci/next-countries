export async function getAllCountries() {
  const fetchRetry = require("fetch-retry")(fetch);

  const countries = await fetchRetry("https://restcountries.com/v3.1/all", {
    retries: 20,
    retryDelay: 10000,
  }).then((res) => {
    return res.json();
  });

  // const countries = await fetch("/api/countries")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((data) => {
  //     return data.countries;
  //   });

  return countries;
}

export async function getCountryById(id) {
  const allCountries = await getAllCountries();
  return allCountries.find((country) => country?.name?.common === id);
}
