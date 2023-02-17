import "@/styles/globals.css";
import Navbar from "@/components/navigation/Navbar";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className="bg-l-mode-bg dark:bg-d-mode-bg min-h-screen">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
