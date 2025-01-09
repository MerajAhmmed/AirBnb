import { auth } from "@/auth";
import CreateHotelBtn from "@/components/manage-hotel/CreateHotelBtn";
import HotelCard from "@/components/manage-hotel/HotelCard";
import { getAllHotels } from "@/database/queris";
import { redirect } from "next/navigation";
import { getDictionary } from "../dictionaries/dictionaries";

export default async function ManageHotelsPage({ params: { lang } }) {
  const session = await auth();
  const dict = await getDictionary(lang);
  // const hotelInfo = await getHotelByHotelId(session?.user);
  const hotelInfo = await getAllHotels();
  // console.log(hotelInfo);
  console.log(session);
  const serializedHotelInfo = JSON.parse(JSON.stringify(hotelInfo));

  if (!session) {
    redirect(`/${lang}/login`);
  }
  return (
    <div className="max-w-7xl mx-auto px-4 pb-8">
      <CreateHotelBtn lang={lang} />
      <HotelCard hotelInfo={serializedHotelInfo} lang={lang} />
    </div>
  );
}
