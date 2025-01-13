import { getHotelByHotelId } from "@/app/actions";
import BookingCard from "./BookingCard";
import ImageGallary from "./ImageGallary";
import PropertyInfo from "./PropertyInfo";
import Reviews from "./Reviews";

export default async function Proerty({ lang, dict, hotelId }) {
  const hotel = await getHotelByHotelId(hotelId);
  console.log(hotel);
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{hotel?.name}</h1>
        <div className="flex items-center text-gray-600">
          <i className="fas fa-star text-yellow-500 mr-1"></i>
          <span>5 · </span>
          <span className="ml-2">2 reviews</span>
          <span className="mx-2">·</span>
          <span className="">{hotel?.location}</span>
        </div>
      </div>
      <ImageGallary images={hotel?.gallery} />
      <div className="grid grid-cols-3 gap-8">
        <PropertyInfo hotel={hotel} />
        <BookingCard
          lang={lang}
          dict={dict}
          hotelId={hotel?._id.toString()}
          price={hotel?.pricePerNight}
          guest={hotel?.totalGuests}
        />
      </div>
      <Reviews />
    </>
  );
}
