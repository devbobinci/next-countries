import { buildCountryPath, extractCountry } from "../countries";

export default function handler(req, res) {
  const countryId = req.query.countryId; //feedbackId -> tak nazywa sie dynamiczny plik strony

  const filePath = buildCountryPath();
  const feedbackData = extractCountry(filePath);

  const selectedCountry = feedbackData.find(
    (country) => country?.name?.common === countryId
  );

  res.status(200).json({ country: selectedCountry });

  return selectedCountry;
}
