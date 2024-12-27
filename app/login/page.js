import CloseBtn from "@/components/auth/CloseBtn";
import LoginFrom from "@/components/auth/LoginFrom";
import SocialLogin from "@/components/auth/SocialLogin";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 relative shadow-black/50">
        <CloseBtn />
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Log in to Hotel Booking
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Welcome back! Lets get you signed in.
          </p>
        </div>
        <div className="space-y-4 mb-4">
          <SocialLogin />
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <LoginFrom />
        </div>
        <div className="text-center text-sm text-gray-600">
          <p>
            Dont have an account?
            <Link href="#" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
