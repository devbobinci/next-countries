import Link from "next/link";
import { HiOutlineMoon, HiMoon } from "react-icons/hi";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="py-8 px-4 md:px-12 xl:px-24 shadow-lg transition-all dark:bg-d-mode-el">
      <div className="max-w-[1600px] flex justify-between mx-auto">
        <h1 className="font-extrabold text-md md:text-lg xl:text-xl 2xl:text-2xl text-d-mode-el dark:text-l-mode-bg">
          <Link href="/">Where in the world?</Link>
        </h1>
        <div
          className="flex gap-2 items-center cursor-pointer select-none"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? (
            <HiMoon className="text-xl xl:text-2xl text-d-mode-el dark:text-l-mode-bg" />
          ) : (
            <HiOutlineMoon className="text-xl xl:text-2xl text-d-mode-el dark:text-l-mode-bg" />
          )}
          <span className="text-sm md:text-md xl:text-lg text-d-mode-el dark:text-l-mode-bg">
            Dark Mode
          </span>
        </div>
      </div>
    </nav>
  );
}
