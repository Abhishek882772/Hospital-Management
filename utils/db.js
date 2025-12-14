import mongoose from 'mongoose';

export default async function connectDB(){
    if (mongoose.connection.readyState === 1) return;


    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected sucessfully");
    }
    catch(err){
        console.log("Database connection failed");
        console.log(err);
    }
}