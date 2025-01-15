import { auth } from "@/auth";
import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import LanguageSwitcherBtn from "./LanguageSwitcherBtn";
import SearchBar from "./SearchBar";

export default async function Header({ lang, dict }) {
  const session = await auth();

  return (
    <nav className="grid grid-cols-2 md:flex justify-between items-center py-3 bg-white border-b mb-6 md:gap-8 px-4 md:px-8 lg:px-20">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="Hotel Logo"
            className="h-8 w-auto"
            height={100}
            width={100}
          />
        </Link>
      </div>

      <SearchBar dict={dict} />

      <div className="flex items-center space-x-4 relative justify-end">
        <LanguageSwitcherBtn lang={lang} />
        <HamburgerMenuIcon lang={lang} session={session} />
      </div>
    </nav>
  );
}
