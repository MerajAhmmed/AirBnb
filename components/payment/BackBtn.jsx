import Link from "next/link";

export default function BackBtn() {
  return (
    <Link href="./details.html" className="text-zinc-800 hover:underline">
      <i className="fas fa-chevron-left mr-2"></i>
      Request to book
    </Link>
  );
}
