"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CredentialModal() {
  const router = useRouter();
  const lang = "en";
  return (
    <div className="max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50 hidden lg:block">
      <ul className="">
        <Link href={`/${lang}/login`} className="w-full">
          <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
            Login
          </li>
        </Link>

        <Link href="/registar" className="w-full">
          <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
            Signup
          </li>
        </Link>

        <Link href="#" className="w-full">
          <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
            Help
          </li>
        </Link>
      </ul>
    </div>
  );
}
