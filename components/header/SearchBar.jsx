import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";

export default async function SearchBar({ lang }) {
  const dict = await getDictionary(lang);
  return (
    <div className="row-start-2 col-span-2 border-0 md:border flex shadow-sm hover:shadow-md transition-all md:rounded-full items-center px-2">
      <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4 divide-x py-2 md:px-2 flex-grow">
        <input
          type="text"
          placeholder={dict?.Whereto}
          className="px-3 bg-transparent focus:outline-none lg:col-span-3 placeholder:text-sm"
        />
      </div>

      <button className="bg-primary w-9 h-9 rounded-full grid place-items-center text-sm text-center transition-all hover:brightness-90 shrink-0">
        <i className="fas fa-search text-white"></i>
      </button>
    </div>
  );
}
