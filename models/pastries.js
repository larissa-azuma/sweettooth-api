import { Schema, model } from "mongoose";

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