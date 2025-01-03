"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegistrationFrom() {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const fullName = formData.get("fullName");
      const email = formData.get("email");
      const password = formData.get("password");
      const cpassword = formData.get("cpassword");

      const res = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          fullName,
          email,
          password,
          cpassword,
        }),
      });

      const data = await res.json();

      if (res.status === 201) {
        setSuccessMessage(res.message);
        setError("");
        router.push("/");
      } else {
        setSuccessMessage("");
        setError(data.message);
      }
      res.status === 201 && router.push("/");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <div className="text-xl text-red-500 text-center">{error && error}</div>
      <form className="space-y-4" onSubmit={onSubmit}>
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          required
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="cpassword"
          type="password"
          placeholder="Confirm Password"
          required
          className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-full py-3 hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </>
  );
}
