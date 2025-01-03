import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Logout from "../auth/LogOut";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import LanguageSwitcherBtn from "./LanguageSwitcherBtn";
import SearchBar from "./SearchBar";

export default function Header({ lang }) {
  return (
    <nav className="grid grid-cols-2 md:flex justify-between items-center py-3 bg-white border-b mb-6 md:gap-8 px-4 md:px-8 lg:px-20">
      <div className="flex items-center">
        <Link href="./index.html">
          <Image
            src={Logo}
            alt="Hotel Logo"
            className="h-8 w-auto"
            height={100}
            width={100}
          />
        </Link>
      </div>

      <SearchBar lang={lang} />

      <div className="flex items-center space-x-4 relative justify-end">
        <Logout lang={lang} />
        <LanguageSwitcherBtn />
        <HamburgerMenuIcon lang={lang} />
      </div>
    </nav>
  );
}
