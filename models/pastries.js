import { Schema, model } from "mongoose";

const pastriesSchema = new Schema({
    name: {
        type: String, required: true
    },
    description: {
        type: String, required: true, 
    },

    image:{
        type:String, required: true
    },
    price: {
        type: Number, required: true,
    }
})

export const Pastries = new ('Pastries', pastriesSchema, 'pastries')