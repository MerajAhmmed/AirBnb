"use client";
import { signOut, useSession } from "next-auth/react";
const Logout = ({ lang }) => {
  const sessionData = useSession();
  const isAuthenticated = sessionData?.data?.user;

  return (
    <>
      {isAuthenticated ? (
        <button
          className="px-4 py-2 bg-primary text-white font-medium rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={() => {
            signOut({ callbackUrl: `http://localhost:3000/${lang}/login` });
          }}
        >
          Sign Out
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default Logout;
