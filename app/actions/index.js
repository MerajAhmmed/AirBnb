"use server";

import { signIn } from "@/auth";
import { hotelModel } from "../models/hotels-model";

export async function login(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export const getHotelByHotelId = async (id) => {
  try {
    const hotels = await hotelModel.findOne({ _id: id });
    // .populate("owner", { name: 1, _id: 1 });

    if (!hotels) {
      throw new Error("Hotel not found");
    }
    return hotels;
  } catch (error) {
    console.error("Error fetching hotel:", error);
    throw new Error("Something went wrong while fetching hotels");
  }
};

export const hotelBooking = async ({
  paymentDetails,
  bookingDetails,
  hotelId,
}) => {
  console.log(paymentDetails);
  console.log(hotelId);
  try {
    const hotel = await getHotelByHotelId(hotelId);

    if (!hotel) {
      throw new Error("Hotel not found.");
    }

    if (hotel.rooms < 1) {
      throw new Error("No rooms available.");
    }

    const newBooking = {
      hotelId: hotelId,
      userId: loggedInUser.id,
      ...bookingDetails,
      ...paymentDetails,
    };

    console.log(newBooking);

    const response = await createBooking({ bookingInfo: newBooking });

    await updateHotel(hotelId, { rooms: hotel.rooms - 1 });

    return {
      bookingId: response._id.toString(),
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
