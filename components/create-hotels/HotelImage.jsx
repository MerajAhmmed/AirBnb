import Image from "next/image";

export default function HotelImage({ onGalleryChange, gallery }) {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]">
      {/* Main Image */}
      <div className="col-span-2 row-span-2 relative">
        <Image
          src={gallery[0] || "https://placehold.co/600x400"} // Default placeholder
          alt="Main Room"
          className="w-full h-full object-cover rounded-lg"
          width={100}
          height={100}
        />
        <input
          type="text"
          value={gallery[0]} // Display the current URL from gallery
          onChange={(e) => onGalleryChange(0, e.target.value)} // Update the URL for this image
          placeholder="https://placehold.co/600x400"
          className="w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
        />
      </div>

      {/* Room 1 */}
      <div className="relative">
        <Image
          src={gallery[1] || "https://placehold.co/600x400"} // Default placeholder
          alt="Room 1"
          className="w-full h-full object-cover rounded-lg"
          width={100}
          height={100}
        />
        <input
          type="text"
          value={gallery[1]} // Display the current URL from gallery
          onChange={(e) => onGalleryChange(1, e.target.value)} // Update the URL for this image
          placeholder="https://placehold.co/600x400"
          className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
        />
      </div>

      {/* Room 2 */}
      <div className="relative">
        <Image
          src={gallery[2] || "https://placehold.co/600x400"} // Default placeholder
          alt="Room 2"
          className="w-full h-full object-cover rounded-lg"
          width={100}
          height={100}
        />
        <input
          type="text"
          value={gallery[2]} // Display the current URL from gallery
          onChange={(e) => onGalleryChange(2, e.target.value)} // Update the URL for this image
          placeholder="https://placehold.co/600x400"
          className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
        />
      </div>

      {/* Room 3 */}
      <div className="relative">
        <Image
          src={gallery[3] || "https://placehold.co/600x400"} // Default placeholder
          alt="Room 3"
          className="w-full h-full object-cover rounded-lg"
          width={100}
          height={100}
        />
        <input
          type="text"
          value={gallery[3]} // Display the current URL from gallery
          onChange={(e) => onGalleryChange(3, e.target.value)} // Update the URL for this image
          placeholder="https://placehold.co/600x400"
          className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
        />
      </div>

      {/* Room 4 */}
      <div className="relative">
        <Image
          src={gallery[4] || "https://placehold.co/600x400"} // Default placeholder
          alt="Room 4"
          className="w-full h-full object-cover rounded-lg"
          width={100}
          height={100}
        />
        <input
          type="text"
          value={gallery[4]} // Display the current URL from gallery
          onChange={(e) => onGalleryChange(4, e.target.value)} // Update the URL for this image
          placeholder="https://placehold.co/600x400"
          className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
        />
      </div>
    </div>
  );
}

// import Image from "next/image";

// export default function HotelImage({ onGalleryChange, gallery }) {
//   return (
//     <div className="grid grid-cols-4 grid-rows-2 gap-4 mb-8 h-[500px]">
//       <div className="col-span-2 row-span-2 relative">
//         <Image
//           src="https://placehold.co/600x400"
//           alt="Main Room"
//           className="w-full h-full object-cover rounded-lg"
//           width={100}
//           height={100}
//         />
//         <input
//           type="text"
//           placeholder="https://placehold.co/600x400"
//           className="w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
//         />
//       </div>
//       <div className="relative">
//         <Image
//           src="https://placehold.co/600x400"
//           alt="Room 1"
//           className="w-full h-full object-cover rounded-lg"
//           width={100}
//           height={100}
//         />
//         <input
//           type="text"
//           placeholder="https://placehold.co/600x400"
//           className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
//         />
//       </div>
//       <div className="relative">
//         <Image
//           src="https://placehold.co/600x400"
//           alt="Room 2"
//           className="w-full h-full object-cover rounded-lg"
//           width={100}
//           height={100}
//         />
//         <input
//           type="text"
//           placeholder="https://placehold.co/600x400"
//           className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
//         />
//       </div>
//       <div className="relative">
//         <Image
//           src="https://placehold.co/600x400"
//           alt="Room 3"
//           className="w-full h-full object-cover rounded-lg"
//           width={100}
//           height={100}
//         />
//         <input
//           type="text"
//           placeholder="https://placehold.co/600x400"
//           className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
//         />
//       </div>
//       <div className="relative">
//         <Image
//           src="https://placehold.co/600x400"
//           alt="Room 4"
//           className="w-full h-full object-cover rounded-lg"
//           width={100}
//           height={100}
//         />
//         <input
//           type="text"
//           placeholder="https://placehold.co/600x400"
//           className="text-sm w-11/12 p-2 border border-primary rounded-lg mt-2 absolute left-1/2 -translate-x-1/2 bottom-2 bg-white"
//         />
//       </div>
//     </div>
//   );
// }
