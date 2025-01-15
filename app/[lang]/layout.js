import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { dbConnect } from "../lib/mongo";
import { getDictionary } from "./dictionaries/dictionaries";

export const metadata = {
  title: "Home",
  description: "AirBnb",
};

export default async function LangLayout({ children, auth, params: { lang } }) {
  await dbConnect();
  const dict = await getDictionary(lang);

  return (
    <html>
      <body>
        <>
          <SessionProvider>
            <Header dict={dict} />
            {auth}
            {children}
            <Footer />
          </SessionProvider>
          <ToastContainer />
        </>
      </body>
    </html>
  );
}
