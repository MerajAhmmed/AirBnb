"use client";

import { useState } from "react";
import Amenities from "./Amenities";
import HotelImage from "./HotelImage";
import InputField from "./InputField";
import PublishBtn from "./PublishBtn";

export default function CreateHotels({ session, lang }) {
  const [hotelInfo, setHotelInfo] = useState({
    name: "",
    location: "",
    pricePerNight: "",
    totalRooms: "",
    totalBedrooms: "",
    totalBeds: "",
    totalGuests: "",
    description: "",
    // availableRooms: "",
    thumbNailUrl: "",
    gallery: ["", "", "", "", ""],
    // amenities: [],
  });

  const [editingField, setEditingField] = useState(null);

  const handleEdit = (fieldKey) => {
    setEditingField(fieldKey);
  };

  const handleSave = (fieldKey, newValue) => {
    setHotelInfo((prev) => ({
      ...prev,
      [fieldKey]: newValue,
    }));
    setEditingField(null);
  };

  const handleGalleryChange = (index, value) => {
    setHotelInfo((prev) => {
      const updatedGallery = [...prev.gallery];
      updatedGallery[index] = value ?? "";
      return {
        ...prev,
        gallery: updatedGallery,
      };
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 relative">
      <PublishBtn lang={lang} session={session} hotelInfo={hotelInfo} />

      <InputField
        fieldKey="name"
        value={hotelInfo.name}
        isEditing={editingField === "name"}
        onEdit={handleEdit}
        onSave={handleSave}
      >
        <h1
          className="text-3xl font-bold mb-2 text-zinc-500 edit"
          id="propertyName"
        >
          {hotelInfo.name || "Property Name"}
        </h1>
      </InputField>

      <InputField
        fieldKey="location"
        value={hotelInfo.location}
        isEditing={editingField === "location"}
        onEdit={handleEdit}
        onSave={handleSave}
      >
        <h1
          className="text-xl font-bold mb-2 text-zinc-500 edit"
          id="propertyLocation"
        >
          {hotelInfo.location || "Property Location"}
        </h1>
      </InputField>

      <HotelImage
        gallery={hotelInfo.gallery}
        onGalleryChange={handleGalleryChange}
      />

      <div className="flex mb-4 gap-2">
        <div className="flex items-center space-x-3">
          <InputField
            fieldKey="pricePerNight"
            value={hotelInfo.pricePerNight}
            isEditing={editingField === "pricePerNight"}
            onEdit={handleEdit}
            onSave={handleSave}
            type="number"
          >
            <span className="text-xl font-bold text-gray-500">
              {hotelInfo.pricePerNight
                ? `${hotelInfo.pricePerNight}$`
                : "Price in USD"}
            </span>
          </InputField>
        </div>
        <span className="text-gray-500 ml-1">per night</span>
      </div>

      <div className="flex items-center mb-4 text-gray-500">
        <InputField
          fieldKey="totalRooms"
          type="number"
          min={1}
          value={hotelInfo.totalRooms}
          isEditing={editingField === "totalRooms"}
          onEdit={handleEdit}
          onSave={handleSave}
        >
          <span>
            {hotelInfo.totalRooms
              ? `Available ${hotelInfo.totalRooms} rooms`
              : "Available X rooms"}
          </span>
        </InputField>
      </div>

      <div className="grid grid-cols-3 gap-8 text-gray-500">
        <div className="col-span-2">
          <div className="border-b pb-6 mb-6">
            <div className="grid grid-cols-1 gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <i className="fas fa-person"></i>
                <InputField
                  fieldKey="totalGuests"
                  type="number"
                  min={1}
                  value={hotelInfo.totalGuests}
                  isEditing={editingField === "totalGuests"}
                  onEdit={handleEdit}
                  onSave={handleSave}
                >
                  <span>
                    {hotelInfo.totalGuests || "How many guests can stay?"}
                  </span>
                </InputField>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-door-open"></i>
                <InputField
                  fieldKey="totalBedrooms"
                  type="number"
                  min={1}
                  value={hotelInfo.totalBedrooms}
                  isEditing={editingField === "totalBedrooms"}
                  onEdit={handleEdit}
                  onSave={handleSave}
                >
                  <span>{hotelInfo.totalBedrooms || "How many bedrooms?"}</span>
                </InputField>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-bed"></i>
                <InputField
                  fieldKey="totalBeds"
                  type="number"
                  min={1}
                  value={hotelInfo.totalBeds}
                  isEditing={editingField === "totalBeds"}
                  onEdit={handleEdit}
                  onSave={handleSave}
                >
                  <span>
                    {hotelInfo.totalBeds || "How many beds available?"}
                  </span>
                </InputField>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">About this place</h3>
            <div className="flex items-center">
              <InputField
                fieldKey="description"
                value={hotelInfo.description}
                isEditing={editingField === "description"}
                onEdit={handleEdit}
                onSave={handleSave}
              >
                <p className="text-gray-600 leading-relaxed edit">
                  {!hotelInfo.description
                    ? "Write a short description about this place"
                    : hotelInfo.description}
                </p>
              </InputField>
            </div>
          </div>
        </div>
      </div>

      <Amenities />
    </div>
  );
}
