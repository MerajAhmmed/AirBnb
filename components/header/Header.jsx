import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import CredentialModal from "./CredentialModal";
import LanguageSwitcherBtn from "./LanguageSwitcherBtn";
import ProfileBtn from "./ProfileBtn";
import SearchBar from "./SearchBar";

export default function Header() {
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

      <SearchBar />

      <div className="flex items-center space-x-4 relative justify-end">
        <LanguageSwitcherBtn />
        <ProfileBtn />
        <CredentialModal />
      </div>
    </nav>
  );
}
