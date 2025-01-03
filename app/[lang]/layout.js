import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { dbConnect } from "../lib/mongo";

export const metadata = {
  title: "Home",
  description: "AirBnb",
};

export default async function LangLayout({ children, auth, params: { lang } }) {
  await dbConnect();
  return (
    <html>
      <body>
        <>
          <Header lang={lang} />
          {auth}
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
