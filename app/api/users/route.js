import User from "@/models/userModel"; 
import connectDB from "@/utils/db";

export async function GET(){
    try{
        await connectDB();
        const users= await User.find();

       return Response.json({
      success: true,
      users,
    });

  } catch (err) {
    return Response.json({
      success: false,
      error: err.message,
    }, { status: 500 });
  }
}