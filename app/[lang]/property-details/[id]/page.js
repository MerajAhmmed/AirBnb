import { auth } from "@/auth.js";
import Proerty from "@/components/property-details/Proerty.jsx";
import { redirect } from "next/navigation.js";
import { getDictionary } from "../../dictionaries/dictionaries.js";

export default async function PropertyPage({ params }) {
  const { id, lang } = params;
  const dict = await getDictionary(lang);

  const session = await auth();
  if (!session) {
    redirect(`/${lang}/login`);
  }
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <Proerty lang={lang} dict={dict} hotelId={id} />
    </div>
  );
}
