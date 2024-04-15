import { Schema, model } from "mongoose";

const reviewsSchema = new Schema({
    body: {
        type: String, required: true
    },
    rating: {
        type: Number, required: true, 
    },

    date:{
        type:Date, required: true,default:Date.now,
    },
   
    
})

export const Reviews = new ('Reviews', reviewsSchema, 'reviews')