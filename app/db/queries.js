import { dbConnect } from "../lib/mongo";
import { Booking } from "../models/booking-modal";
import { userModel } from "../models/user-model";

export async function createUser(user) {
  await dbConnect();
  return await userModel.create(user);
}
export const createBooking = async ({ bookingInfo }) => {
  try {
    const newBooking = await Booking.create(bookingInfo);
    return newBooking;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while creating booking;");
  }
};

export const getBookingById = async (bookingId) => {
  try {
    const bookingDetails = await Booking.findById(bookingId)
      .populate("userId", ["name", "email"])
      .populate("hotelId");
    return bookingDetails;
  } catch (error) {
    throw new Error("Something went wrong while creating booking;");
  }
};

export const getBookingByHotelIdAndUserId = async (userId, hotelId) => {
  try {
    const bookingDetails = await Booking.findOne({ userId, hotelId });
    return !!bookingDetails;
  } catch (error) {
    throw new Error("Something went wrong while creating booking;");
  }
};
