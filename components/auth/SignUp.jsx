"use client";

import CloseBtn from "@/components/auth/CloseBtn";
import RegistrationFrom from "@/components/auth/RegistrationFrom";
import SocialRegister from "@/components/auth/SocialRegister";
import Link from "next/link";

export default function SignUp({ lang }) {
  return (
    <div className=" bg-white bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md px-6 py-1">
        <CloseBtn />
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Create Your Account
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Welcome! Please fill out the form to register.
          </p>
        </div>
        <div className="space-y-4 mb-4">
          <SocialRegister />
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <RegistrationFrom />
        </div>
        <div className="text-center text-sm text-gray-600 -mt-2">
          <p>
            Already have an account?
            <Link
              href={`${lang}/login`}
              className="text-blue-500 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
