import HotelRoomCards from "@/components/landing/HotelRoomCards";
import NavigationPage from "@/components/landing/NavigationPage";
import { getAllHotels } from "@/database/queris";
import { getDictionary } from "./dictionaries/dictionaries";

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const hotelInfo = await getAllHotels();
  console.log(hotelInfo);
  return (
    <>
      <section className="px-6">
        <HotelRoomCards dict={dict} lang={lang} hotelInfo={hotelInfo} />
      </section>
      <div className="mt-8 flex justify-center">
        <NavigationPage />
      </div>
    </>
  );
}
