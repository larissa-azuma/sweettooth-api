import { Schema, model } from "mongoose";
import multer from "multer";

//Create malter upload middlewares
const upload = multer({ dest: 'uploads/images' });


const pastriesSchema = new Schema({
    name: {
        type: String, required: true
    },
    description: {
        type: String, required: true, 
    },

    image:{
        type:String, required: false
    },
    price: {
        type: Number, required: true,
    }
})

export const Pastries = model ('Pastries', pastriesSchema, 'pastries')