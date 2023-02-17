import Image from "next/image";

export default function CountryFlag({ country }) {
  return (
    <div className="my-12 md:w-3/4 xl:w-[45%] transition-all">
      {country && (
        <Image
          className="object-cover transition-all w-full"
          src={country?.flags?.svg}
          alt={country?.name?.common}
          width={200}
          height={130}
        />
      )}
    </div>
  );
}
