import { dbConnect } from "@/app/lib/mongo";
import { hotelModel } from "@/app/models/hotels-model";
import { userModel } from "@/app/models/user-model";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const {
    email,
    name,
    location,
    gallery,
    pricePerNight,
    totalRooms,
    totalBedrooms,
    totalBeds,
    totalGuests,
    description,
    path,
    // availableRooms,
    // thumbNailUrl,
    // amenities,
  } = await request.json();
  console.log(request);
  await dbConnect();
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return new NextResponse(
        JSON.stringify({
          message: "User not found.",
        }),
        { status: 404 }
      );
    }

    const userId = user._id.toString();

    const newHotel = {
      name,
      location,
      description,
      owner: userId,
      pricePerNight,
      totalGuests,
      totalBeds,
      totalRooms,
      // availableRooms,
      // thumbNailUrl,
      gallery,
      // amenities,
    };
    console.log(newHotel);
    await hotelModel.create(newHotel);

    revalidatePath(path);

    return new NextResponse(
      JSON.stringify({
        message: "Hotel created successfully.",
      }),
      { status: 201 }
    );
  } catch (err) {
    return new NextResponse(
      JSON.stringify({
        message: err.message,
      }),
      { status: 500 }
    );
  }
};
