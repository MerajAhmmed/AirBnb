export default function CreateHotelBtn() {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-zinc-800">Manage Hotels</h1>
      <button className="bg-primary text-white px-4 py-2 rounded-lg hover:brightness-90 transition-colors">
        + Create Hotel
      </button>
    </div>
  );
}
