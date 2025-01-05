"use client";
import { FaPencilAlt } from "react-icons/fa";

export default function PropertyInfo() {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="text-3xl font-bold mb-2 text-zinc-400 edit"
          id="propertyName"
          placeholder="Property Name"
        />

        <FaPencilAlt size={20} className="text-gray-500" />
      </div>
      <div className="flex items-center text-gray-600 gap-2">
        <span className="edit text-gray-600 ">Property location</span>
        <FaPencilAlt size={20} className="text-gray-500" />
      </div>
    </div>
  );
}
