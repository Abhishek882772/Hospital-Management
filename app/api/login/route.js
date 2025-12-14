import connectDB from "@/utils/db";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();
    console.log("Received data:", email, password);


    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Login successful", user: existingUser },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Error in login", error: err.message },
      { status: 500 }
    );
  }
}
