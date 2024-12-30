"use client";

import serverRedirect from "@/app/utils/serverRidirect";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LanguageSwitcherBtn = () => {
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: "en", language: "English" },
    { code: "bn", language: "Bangla" },
  ];

  const found = languages.find((lang) => pathname.includes(lang.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = async (lang) => {
    setSelectedLanguage(languages.find((entry) => entry.code === lang));
    setShowMenu(false);

    let updatedPath = pathname.replace(selectedLanguage.code, lang);

    if (!pathname.includes(selectedLanguage.code)) {
      updatedPath = `/${lang}${pathname}`;
    }

    serverRedirect(updatedPath);
  };

  useEffect(() => {
    const handleClickOutside = () => setShowMenu(false);
    if (showMenu) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMenu]);

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(!showMenu);
        }}
      >
        <i className="fas fa-language text-zinc-700 text-xl"></i>
      </button>

      {showMenu && (
        <ul className="max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50 hidden lg:block">
          {languages.map((entry) => (
            <li
              key={entry.code}
              onClick={() => handleLanguageChange(entry.code)}
              className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4"
            >
              {entry.language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcherBtn;
