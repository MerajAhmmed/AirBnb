import { dbConnect } from "../lib/mongo";
import { userModel } from "../models/user-model";

export async function createUser(user) {
  await dbConnect();
  return await userModel.create(user);
}
