import { Schema, model } from "mongoose";


const userSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  subj: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  }
  
});





//collection

const Setremainder = new model("Setremainder", userSchema);

export default Setremainder;
