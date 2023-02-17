import Link from "next/link";

export default function BorderCountries({ borders }) {
  return (
    <div className="md:mt-6">
      <h3 className="text-lg dark:text-l-mode-bg text-d-mode-bg">
        Border Countries:
      </h3>
      <div className="w-full">
        {borders?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 text-center mt-4 gap-3 pb-4">
            {borders?.map((borderCountry) => {
              return (
                <Link href={`/${borderCountry}`} key={borderCountry}>
                  <div className="text-d-mode-bg dark:text-l-mode-bg dark:bg-d-mode-el rounded-sm text-xs py-2 px-4 back-btn hover:opacity-75 transition-all cursor-pointer">
                    {borderCountry}
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="text-d-mode-bg text-xl italic py-2 dark:text-l-mode-bg">
            There are no countries around
          </p>
        )}
      </div>
    </div>
  );
}
