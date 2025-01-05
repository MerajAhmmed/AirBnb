"use client";

import { useState } from "react";
import Amenities from "./Amenities";
import HotelImage from "./HotelImage";
import InputField from "./InputField";
import PublishBtn from "./PublishBtn";

export default function CreateHotels() {
  // State to manage hotel info
  const [hotelInfo, setHotelInfo] = useState({
    name: "",
    location: "",
    price: "",
    rooms: "",
    bedrooms: "",
    beds: "",
    description: "",
  });

  // State to control which field is being edited
  const [editingField, setEditingField] = useState(null);

  // Handle edit mode
  const handleEdit = (fieldKey) => {
    setEditingField(fieldKey);
  };

  // Handle save changes
  const handleSave = (fieldKey, newValue) => {
    setHotelInfo((prev) => ({
      ...prev,
      [fieldKey]: newValue,
    }));
    setEditingField(null); // Exit edit mode
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 relative">
      <PublishBtn />

      {/* Hotel Name Input */}
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

      {/* Hotel Description Input */}

      <InputField
        key={"location"}
        fieldKey={"location"}
        value={hotelInfo.description}
        isEditing={editingField === "location"}
        onEdit={handleEdit}
        onSave={handleSave}
      >
        <h1
          className="text-xl font-bold mb-2 text-zinc-500 edit"
          id="Propertylocation"
        >
          {hotelInfo.location || "Property location"}
        </h1>
      </InputField>

      {/* <PropertyInfo /> */}
      <HotelImage />

      <div className="flex mb-4 gap-2">
        <div className="flex items-center space-x-3">
          <InputField
            fieldKey="price"
            value={hotelInfo.price}
            isEditing={editingField === "price"}
            onEdit={handleEdit}
            onSave={handleSave}
            type="number"
          >
            <span className="text-xl font-bold text-gray-500">
              {hotelInfo.price ? hotelInfo.price + "$" : "Price in USD"}
            </span>
          </InputField>
        </div>
        <span className="text-gray-500 ml-1">per night</span>
      </div>

      {/* Editable Available Rooms */}
      <div className="flex items-center mb-4 text-gray-500">
        <InputField
          key={"rooms"}
          fieldKey={"rooms"}
          type={"number"}
          min={1}
          value={hotelInfo.rooms}
          isEditing={editingField === "rooms"}
          onEdit={handleEdit}
          onSave={handleSave}
        >
          <span>
            {hotelInfo.rooms
              ? `Available ${hotelInfo.rooms} rooms`
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
                  key={"guests"}
                  fieldKey={"guests"}
                  type={"number"}
                  min={1}
                  value={hotelInfo.guests}
                  isEditing={editingField === "guests"}
                  onEdit={handleEdit}
                  onSave={handleSave}
                >
                  <span>{hotelInfo.guests || "How many Guest can Stay?"}</span>
                </InputField>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-door-open"></i>
                <InputField
                  key={"bedrooms"}
                  fieldKey={"bedrooms"}
                  type={"number"}
                  min={1}
                  value={hotelInfo.bedrooms}
                  isEditing={editingField === "bedrooms"}
                  onEdit={handleEdit}
                  onSave={handleSave}
                >
                  <span>{hotelInfo.bedrooms || "How many Bedrooms ?"} </span>
                </InputField>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-bed"></i>
                <InputField
                  key={"beds"}
                  fieldKey={"beds"}
                  type={"number"}
                  min={1}
                  value={hotelInfo.beds}
                  isEditing={editingField === "beds"}
                  onEdit={handleEdit}
                  onSave={handleSave}
                >
                  <span>{hotelInfo.beds || "How many beds available ?"}</span>
                </InputField>
              </div>
            </div>
          </div>

          {/* <!-- Description --> */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">About this place</h3>
            <div className="flex items-center">
              <InputField
                key={"description"}
                fieldKey={"description"}
                value={hotelInfo.description}
                isEditing={editingField === "description"}
                onEdit={handleEdit}
                onSave={handleSave}
                textarea={true}
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
