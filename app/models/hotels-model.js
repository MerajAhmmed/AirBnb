import mongoose, { Schema } from "mongoose";

const hotelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pricePerNight: {
      type: Number,
      required: true,
    },
    totalGuests: {
      type: Number,
      required: true,
    },
    totalBeds: {
      type: Number,
      required: true,
    },
    totalRooms: {
      type: Number,
      required: true,
    },
    // availableRooms: {
    //   type: Number,
    //   required: true,
    // },

    gallery: {
      type: [String],
      required: true,
    },
    // amenities: {
    //   type: [String],
    //   required: true,
    // },
  },
  { timestamps: true }
);

export const hotelModel =
  mongoose.models.hotels ?? mongoose.model("hotels", hotelSchema);
