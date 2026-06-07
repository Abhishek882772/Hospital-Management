import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phone:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  bio:String,
  website:String,
  image:String,
  medicalData:{
    allergies:{
      type:String,
      default:""
    },
    medications:{
      type:String,
      default:""
    },
    chronicConditions:{
      type:String,
      default:""
    },
    pastSurgeries:{
      type:String,
      default:""
    }
  }
});

export default mongoose.models.Patient ||
mongoose.model("Patient", patientSchema);