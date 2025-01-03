import Login from "@/components/auth/Login";

export default function Page({ params: { lang } }) {
  return <Login lang={lang} />;
}
