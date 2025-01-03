import { dbConnect } from "@/app/lib/mongo";
import { userModel } from "@/app/models/user-model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { fullName, email, password, cpassword } = await request.json();

    if (password !== cpassword) {
      return new NextResponse(
        JSON.stringify({ message: "Passwords do not match" }),
        { status: 400 }
      );
    }
    await dbConnect();

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ message: "Email already in use" }),
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { name: fullName, email, password: hashedPassword };
    await userModel.create(newUser);

    return new NextResponse(
      JSON.stringify({ message: "User has been created" }),
      { status: 201 }
    );
  } catch (err) {
    console.error("Error creating user:", err);
    return new NextResponse(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
};
