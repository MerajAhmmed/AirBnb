"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar({ dict }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSeach(term) {
    const params = new URLSearchParams();

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="row-start-2 col-span-2 border-0 md:border flex shadow-sm hover:shadow-md transition-all md:rounded-full items-center px-2">
      <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-4 divide-x py-2 md:px-2 flex-grow">
        <input
          type="text"
          placeholder={dict?.Whereto}
          className="px-3 bg-transparent focus:outline-none lg:col-span-3 placeholder:text-sm"
          onChange={(e) => {
            handleSeach(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString}
        />
      </div>

      <button className="bg-primary w-9 h-9 rounded-full grid place-items-center text-sm text-center transition-all hover:brightness-90 shrink-0">
        <i className="fas fa-search text-white"></i>
      </button>
    </div>
  );
}
