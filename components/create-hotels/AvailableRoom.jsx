"use client";
import { FaPencilAlt } from "react-icons/fa";
export default function AvailableRoom() {
  return (
    <>
      {" "}
      <div className="flex items-center mb-4 gap-2 ">
        <span className="text-xl font-bold edit">Price in USD</span>
        <FaPencilAlt size={20} className="text-gray-500" />
        <span className="text-gray-600 ml-1">per night</span>
      </div>
      <div className="mb-4">
        <span className="edit">Available X rooms</span>
      </div>
    </>
  );
}
