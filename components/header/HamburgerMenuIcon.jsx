"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HamburgerMenuIcon({ lang, session }) {
  const sessionData = useSession();
  const isAuthenticated = sessionData?.user;

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleModal = (event) => {
    event.stopPropagation();
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="bg-white border border-zinc-300 text-zinc-800 px-4 py-2 rounded-full hover:shadow-md flex gap-3 items-center justify-center">
        <button onClick={handleModal} ref={modalRef}>
          <i className="fas fa-bars"></i>
        </button>

        <Link
          href={`/${lang}/profileInfo`}
          className="bg-zinc-600 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white"
        >
          {session?.user?.image ? (
            <Image
              src={session?.user?.image}
              alt={session?.user?.name}
              width={90}
              height={90}
              className="rounded-full"
            />
          ) : (
            session?.user?.name.charAt(0)?.toUpperCase()
          )}
        </Link>
      </div>

      {showModal && (
        <div className="max-w-48 w-48 bg-white shadow-sm border rounded-md absolute right-0 top-full max-h-fit mt-2 z-50 lg:block">
          <ul>
            {sessionData ? (
              <>
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
              </>
            ) : (
              <>
                <Link href={`/${lang}/create-hotels`} className="w-full">
                  <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                    Create Hotel
                  </li>
                </Link>

                <Link href={`/${lang}/manage-hotels`} className="w-full">
                  <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                    Manage Hotels
                  </li>
                </Link>

                <Link href={`/${lang}/bookings`} className="w-full">
                  <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                    Bookings
                  </li>
                </Link>
                <button
                  className="w-full text-left"
                  onClick={() => {
                    signOut({
                      callbackUrl: `/${lang}/login`,
                    });
                  }}
                >
                  <li className="px-3 py-2 text-sm text-zinc-700 transition-all hover:bg-zinc-50 hover:text-zinc-800 hover:pl-4">
                    Logout
                  </li>
                </button>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
