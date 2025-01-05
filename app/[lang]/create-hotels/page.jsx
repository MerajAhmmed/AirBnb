import { auth } from "@/auth";
import CreateHotels from "@/components/create-hotels/CreateHotels";
import { redirect } from "next/navigation";
import { getDictionary } from "../dictionaries/dictionaries";

export default async function CreateHotelPage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  const session = await auth();
  if (!session) {
    redirect(`/${lang}/login`);
  }
  return (
    <div>
      <CreateHotels lang={lang} session={session} />
    </div>
  );
}
