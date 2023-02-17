import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar({ query, setQuery, setSelectedRegion }) {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex items-center px-8 py-4 text-sm shadow-md rounded-md bg-white dark:bg-d-mode-el transition-all">
          <AiOutlineSearch className="text-l-mode-input text-xl mr-6 dark:text-l-mode-bg" />
          <input
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedRegion("");
            }}
            value={query}
            type="search"
            placeholder="Search for a country..."
            className="outline-none bg-white dark:bg-d-mode-el dark:placeholder:text-l-mode-bg text-d-mode-bg transition-all dark:text-l-mode-bg w-full"
          />
        </div>
      </form>
    </>
  );
}
