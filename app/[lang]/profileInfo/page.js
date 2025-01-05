import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getDictionary } from "../dictionaries/dictionaries";

export default async function ProfilePage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const session = await auth();
  if (!session) {
    redirect(`/${lang}/login`);
  }
  return <div>ProfileP</div>;
}
