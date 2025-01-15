import SignUp from "@/components/auth/SignUp";

export default function Page({ params: { lang } }) {
  return <SignUp lang={lang} />;
}
