"use client";

import { dateFormat } from "@/app/utils/dateFormate";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

export default function BookingCard({ dict, lang, hotelId, price, guest }) {
  console.log(price);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [error, setError] = useState("");
  const [selectedGuest, setSelectedGuest] = useState("");
  const checkOutDate = dateFormat(checkOut);
  const checkInDate = dateFormat(checkIn);
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  console.log(error);

  const handleReserve = () => {
    if (!checkIn) {
      toast.error("Check in date is required.");
      return;
    }

    if (!checkOut) {
      toast.error("Check out date is required.");
      return;
    }

    const checkOutDate = dateFormat(checkOut);
    const checkInDate = dateFormat(checkIn);

    if (guest !== "" && selectedGuest > guest) {
      toast.error(`Maximum ${guest} guests allowed.`);
      return;
    }

    const params = new URLSearchParams();

    params.set("checkin", checkInDate);
    params.set("checkout", checkOutDate);
    params.set("guest", selectedGuest);

    router.push(`${pathname}/payment?${params.toString()}`);
  };
  return (
    <div>
      <div className="bg-white shadow-lg rounded-xl p-6 border">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-xl font-bold">${price}</span>
            <span className="text-gray-600 ml-1">per night</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-500 mr-1"></i>
            <span>5</span>
          </div>
        </div>

        <div className="border rounded-lg mb-4">
          <div className="grid grid-cols-2 border-b">
            <div className="overflow-hidden ml-3">
              <DatePicker
                selected={checkIn}
                maxDate={checkOut}
                minDate={Date.now()}
                placeholder="Check in"
                className="p-3 border-r outline-none"
                onChange={(date) => setCheckIn(date)}
              />
            </div>
            <div className="overflow-hidden pr-3 border-l pl-3">
              <DatePicker
                selected={checkOut}
                minDate={checkIn || Date.now()}
                onChange={(date) => setCheckOut(date)}
                placeholder="Check out"
                className="p-3 border-r outline-none"
              />
            </div>
          </div>
          <input
            min={0}
            value={selectedGuest}
            max={guest}
            onChange={(event) => setSelectedGuest(event.target.value)}
            type="number"
            placeholder="Guests"
            className="w-full p-3"
          />
        </div>

        <button
          className="w-full block text-center bg-primary text-white py-3 rounded-lg transition-all hover:brightness-90"
          onClick={handleReserve}
        >
          Reserve
        </button>

        <div className="text-center mt-4 text-gray-600">
          <p>You wont be charged yet</p>
        </div>
      </div>
    </div>
  );
}
