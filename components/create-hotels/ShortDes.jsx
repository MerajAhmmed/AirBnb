"use client";
import { FaPencilAlt } from "react-icons/fa";
export default function ShortDes() {
  return (
    <div class=" mb-6 gap-2">
      <h3 class="text-xl font-semibold mb-4">About this place</h3>
      <p class="text-gray-700 leading-relaxed edit">
        Write a short description about this place
      </p>
      <FaPencilAlt size={20} className="text-gray-500" />
    </div>
  );
}
