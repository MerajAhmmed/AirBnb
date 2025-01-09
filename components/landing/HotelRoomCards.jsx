import Image from "next/image";
import Link from "next/link";

export default function HotelRoomCards({ hotelInfo }) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {hotelInfo?.map((hotel) => (
        <Link href="details.html" className="block group" key={hotel?.id}>
          <div>
            <div className="relative">
              <Image
                src={hotel?.gallery[0]}
                alt={hotel?.name}
                className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform"
                width={100}
                height={100}
              />
              <div className="absolute top-3 right-3 bg-white/80 px-3 py-1 rounded-full text-xs font-semibold">
                <i className="ph-bed inline-block mr-1"></i>
                {hotel?.totalRooms} Rooms Left
              </div>
            </div>
            <div className="mt-3">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">{hotel?.name}</h3>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-zinc-600">4.9</span>
                </div>
              </div>
              <p className="text-zinc-500 text-sm mt-1">{hotel?.location}</p>
              <div className="mt-2 flex justify-between items-center">
                <div>
                  <span className="font-bold">${hotel?.pricePerNight}</span>
                  <span className="text-zinc-500 text-sm"> per night</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
