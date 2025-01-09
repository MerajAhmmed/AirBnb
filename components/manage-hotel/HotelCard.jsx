"use client";

import Image from "next/image";
import Link from "next/link";

export default function HotelCard({ hotelInfo }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {hotelInfo.map((hotel) => (
        <div className="overflow-hidden  cursor-pointer" key={hotel.id}>
          <div className="relative">
            <Image
              src={hotel.gallery[0]}
              alt="Hotel Property"
              className="w-full h-48 object-cover rounded-md transition-all hover:scale-105"
              height={100}
              width={100}
            />
            <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full text-sm font-semibold">
              <i className="fas fa-star text-yellow-500 mr-1"></i>4.8
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-zinc-800 mb-2">
              {hotel.name}
            </h2>
            <div className="flex justify-between items-center">
              <span className="text-zinc-600">
                {hotel.totalRooms} Rooms Available
              </span>
              <span className="text-rose-600 font-semibold">
                {hotel.pricePerNight}/night
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500">Location: {hotel.location}</span>
              <div className="space-x-2">
                <Link
                  href="./create.html"
                  className="text-blue-500 hover:text-blue-600"
                >
                  <i className="fas fa-edit"></i>
                </Link>
                <button className="text-red-500 hover:text-red-600">
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
