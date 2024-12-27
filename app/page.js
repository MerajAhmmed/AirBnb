import HotelRoomCards from "@/components/landing/HotelRoomCards";
import NavigationPage from "@/components/landing/NavigationPage";

export default function Home() {
  return (
    <>
      <section className="px-6">
        <HotelRoomCards />
      </section>
      <div className="mt-8 flex justify-center">
        <NavigationPage />
      </div>
    </>
  );
}
