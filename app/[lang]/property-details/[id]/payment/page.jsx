import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import { getHotelByHotelId } from "@/app/actions";
import { auth } from "@/auth";
import Payment from "@/components/payment/Payment";

export default async function PaymentPage({ params }) {
  const { id, lang } = params;
  const hotels = await getHotelByHotelId(id);
  const dict = await getDictionary(lang);
  const hotel = JSON.parse(JSON.stringify(hotels));
  const session = await auth();
  if (!session) {
    redirect(`/${lang}/login`);
  }
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <Payment lang={lang} dict={dict} hotelId={id} hotel={hotel} />
    </div>
  );
}
