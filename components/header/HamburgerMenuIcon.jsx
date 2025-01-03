"use client";

import Link from "next/link";

export default function HamburgerMenuIcon({ lang }) {
  return (
    <>
      <button className="bg-white border border-zinc-300 text-zinc-800 px-4 py-2 rounded-full hover:shadow-md flex gap-3 items-center justify-center">
        <i className="fas fa-bars"></i>
        <span className="bg-zinc-600 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white">
          <i className="fas fa-user text-white"></i>
        </span>
      </button>
      <div className="max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50 hidden lg:block">
        <ul className="">
          <Link href={`/${lang}/login`} className="w-full">
            <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
              Login
            </li>
          </Link>

          <Link href={`/${lang}/register`} className="w-full">
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
    </>
  );
}

{
  /* <>
  <div className="px-3 py-2 text-sm text-zinc-700">
    <div className="flex items-center gap-2">
      <img
        src={user?.profilePicture || "/default-profile.png"}
        alt="User"
        className="w-8 h-8 rounded-full"
      />
      <span>{user?.name || "User"}</span>
    </div>
  </div>

  <Link href="/create-hotel" className="w-full">
    <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
      Create Hotel
    </li>
  </Link>

  <Link href="/manage-hotels" className="w-full">
    <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
      Manage Hotels
    </li>
  </Link>

  <Link href="/bookings" className="w-full">
    <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
      Bookings
    </li>
  </Link>

  <li
    onClick={logout}
    className="px-3 py-2 text-sm text-zinc-700 cursor-pointer transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4"
  >
    Logout
  </li>
</>; */
}
