import HotelRoomCards from "@/components/landing/HotelRoomCards";
import NavigationPage from "@/components/landing/NavigationPage";
import { getAllHotels } from "@/database/queris";
import { getDictionary } from "./dictionaries/dictionaries";

export default async function Home({ params: { lang }, searchParams }) {
  const pageNum = searchParams?.page ? parseInt(searchParams.page) : 1;

  const dict = await getDictionary(lang);
  const { hotels, pagination } = await getAllHotels(pageNum);

  return (
    <>
      <section className="px-6">
        <HotelRoomCards dict={dict} lang={lang} hotelInfo={hotels} />
      </section>
      <div className="mt-8 flex justify-center">
        <NavigationPage pagination={pagination} />
      </div>
    </>
  );
}
