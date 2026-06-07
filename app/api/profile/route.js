import { NextResponse } from "next/server";
import Patient from "@/models/patientModel";
import connectDB from "@/utils/db";

export async function PUT(req) {
  try {
    await connectDB();

    const body = await req.json();

    console.log("BODY:", body);

    const updatedPatient = await Patient.findOneAndUpdate(
  { email: body.email },
  {
    name: body.name,
    email: body.email,
    phone: body.phone,
    address: body.address,
    username: body.username,
    bio: body.bio,
    website: body.website,
    image: body.image,
    medicalData: body.medicalData
  },
  {
    upsert: true,
    returnDocument: "after"
  }
);

    console.log("UPDATED:", updatedPatient);

    return NextResponse.json(updatedPatient);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();

    const patient = await Patient.findOne({
      email: "abhishek@email.com"
    });

    return NextResponse.json(patient);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}