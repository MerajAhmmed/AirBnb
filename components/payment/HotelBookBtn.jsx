import Link from "next/link";

export default function HotelBookBtn() {
  return (
    <Link
      href="./success.html"
      className="w-full block text-center bg-primary text-white py-3 rounded-lg mt-6 hover:brightness-90"
    >
      Request to book
    </Link>
  );
}
