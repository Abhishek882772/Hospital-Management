import mongoose from "mongoose";
import User from "@/models/userModel"; 
import connectDB from "@/utils/db";
import { hashPassword } from "@/lib/auth";

export async function POST(req) {
  try {
    
    await connectDB();
    const body = await req.json();
    
    const hashedPass = await hashPassword(body.password);
    const newUser = await User.create({
      ...body,
      password: hashedPass,
    });

    return Response.json(
      { message: "User signed up successfully", user: newUser },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: "Error in signup", error: err.message },
      { status: 500 }
    );
  }
}
