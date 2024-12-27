export default function ProfileBtn() {
  return (
    <button className="bg-white border border-zinc-300 text-zinc-800 px-4 py-2 rounded-full hover:shadow-md flex gap-3 items-center justify-center">
      <i className="fas fa-bars"></i>
      <span className="bg-zinc-600 w-6 h-6 rounded-full flex items-center justify-center text-xs text-white">
        <i className="fas fa-user text-white"></i>
      </span>
    </button>
  );
}
