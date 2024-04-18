import {Reviews} from "../models/reviews.js"

// Get Reviews
export const addReviews= async (req, res,next) => {
   const { body,rating,date} = req.body
    try {
       // console.log(req.body);
     // add reviews to the database
      const createResult = await Reviews.create({
         body,rating, date
      });
      //return reviews
      res.status(201).json(createResult);
    } catch (error) {
     next(error);
    }
 };
  
 
 export const getReviews= async (req, res,next) => {
    try {
      //Get all reviews from database
      const findResult = await Reviews.find();
      //Return response
      res.status(200).json(findResult);
  
 } catch (error) {
     next (error);
    }
 };
 
 export const getOne = async (req, res,next) => {
    try {
      // Get single reviews ny id 
      const findByIdResult = await Reviews.findById(req.params.id);
      //Return 404 if no reviews is found 
      if (findByIdResult===null){
          res.status (404).json ({
             message : `Reviews with ID: ${req.params.id }not found `
         });
      }else{
     //Return  response
     res.status(200).json(findByIdResult);
 }
    } catch (error) {
     next(error);
    }
 
 
 }
 
 export const upDateReviews = async (req, res) => {
    let updateOneReviews= await Reviews.updateOne({_id:req.params.id});
     res.status(200).json(updateOneReviews)
 }
 
 export const deleteReviews = async (req, res) => {
    let deleteOneReviews = await Reviews.deleteOne({_id:req.params.id})
     res.send(200).json (deleteOneReviews)
 }