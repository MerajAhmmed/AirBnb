import Link from "next/link";

export default function BackBtn({ hotelId }) {
  return (
    <Link
      href={`/property-details/${hotelId}`}
      className="text-zinc-800 hover:underline"
    >
      <i className="fas fa-chevron-left mr-2"></i>
      Request to book
    </Link>
  );
}
