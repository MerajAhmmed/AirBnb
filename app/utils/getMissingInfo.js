export const getMissingInfo = (hotelInfo) => {
  const requiredFields = [
    { key: "name", label: "Hotel Name" },
    { key: "location", label: "Location" },
    { key: "pricePerNight", label: "Price" },
    { key: "totalRooms", label: "Number of Rooms" },
    { key: "totalBedrooms", label: "Number of Bedrooms" },
    { key: "totalBeds", label: "Number of Beds" },
    { key: "totalGuests", label: "Number of Guests" },
    { key: "description", label: "Description" },
  ];

  if (!hotelInfo) {
    return "Hotel information is missing.";
  }

  const missingFields = requiredFields
    .filter((field) => {
      const value = hotelInfo[field.key];

      return value === undefined || value === "" || value === null;
    })
    .map((field) => field.label);

  if (missingFields.length > 0) {
    return missingFields.join(", ");
  }

  return null;
};
