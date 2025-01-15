import { dbConnect } from "@/app/lib/mongo";
import { hotelModel } from "@/app/models/hotels-model";

export async function getAllHotels(
  pageNum = 1,
  searchTerm = "",
  limitItem = 8,
  sortType = "asc"
) {
  await dbConnect(); // Ensure the database is connected

  try {
    const sort = sortType === "asc" ? 1 : -1;
    const limit = parseInt(limitItem, 10);
    const page = parseInt(pageNum, 10);
    const skip = (page - 1) * limit;

    const hotels = await hotelModel
      .find({
        ...(searchTerm && { name: { $regex: searchTerm, $options: "i" } }),
      })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: sort });

    const total = await hotelModel.countDocuments({
      ...(searchTerm && { name: { $regex: searchTerm, $options: "i" } }),
    });

    const totalPages = Math.ceil(total / limit);
    const nextPage = page + 1 > totalPages ? null : page + 1;
    const previousPage = page - 1 < 1 ? null : page - 1;

    return {
      hotels,
      pagination: {
        totalPages,
        currentPage: page,
        nextPage,
        previousPage,
      },
    };
  } catch (error) {
    throw new Error("Something went wrong while fetching hotels");
  }
}
