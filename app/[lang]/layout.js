import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
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
          <SessionProvider>
            <Header lang={lang} />
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
