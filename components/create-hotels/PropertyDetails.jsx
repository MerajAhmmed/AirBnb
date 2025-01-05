"use client";
import { FaPencilAlt } from "react-icons/fa";
export default function PropertyDetails() {
  return (
    <div className="border-b pb-6 mb-6">
      <div className="grid grid-cols-1 gap-4 text-gray-600">
        <div className="flex items-center gap-2">
          <i className="fas fa-person"></i>
          <span className="edit">How many Guest can Stay?</span>
          <FaPencilAlt size={20} className="text-gray-500" />
        </div>
        <div className="flex items-center gap-2">
          <i className="fas fa-door-open"></i>
          <span className="edit">How many Bedrooms ? </span>
          <FaPencilAlt size={20} className="text-gray-500" />
        </div>
        <div className="flex items-center gap-2">
          <i className="fas fa-bed"></i>
          <span className="edit">How many beds available ?</span>
          <FaPencilAlt size={20} className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}
