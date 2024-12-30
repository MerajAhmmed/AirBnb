import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Home",
  description: "AirBnb",
};

export default function LangLayout({ children, auth, params: { lang } }) {
  return (
    <html lang="en">
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
