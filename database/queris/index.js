import { hotelModel } from "@/app/models/hotels-model";
import { replaceMongoIdInArray } from "@/app/utils/dataUtils";

export async function getAllHotels() {
  const hotels = await hotelModel.find().lean();

  return replaceMongoIdInArray(hotels);
}
