import fs from "fs";
import path from "path";

export function buildCountryPath() {
  return path.join(process.cwd(), "data", "all.json");
}

export function extractCountry(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  return data;
}

export default function handler(req, res) {
  // if (req.method === "GET") {
  try {
    const filePath = buildCountryPath();
    const data = extractCountry(filePath);
    res.status(200).json({ countries: data });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
  // }
}
