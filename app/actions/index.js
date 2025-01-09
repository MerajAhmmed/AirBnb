"use server";

import { signIn } from "@/auth";
import { userModel } from "../models/user-model";

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

export const getUserByEmail = async (email) => {
  try {
    const user = await userModel.findOne({ email }).lean();

    if (!user) {
      return null;
    }

    return {
      id: user?._id.toString(),
      name: user?.name,
      email: user?.email,
    };
  } catch (error) {
    throw new Error("Something went wrong while fetching user data;");
  }
};

export const getHotelByHotelId = async (id) => {
  try {
    const hotel = await hotelModel
      .findOne({ _id: id })
      .populate("owner", { name: 1, _id: 1 });
    console.log(hotel);
    return hotel;
  } catch (error) {
    throw new Error("Something went wrong while fetching hotels");
  }
};
