import { Pastries } from "../models/pastries.js"

// Get Pastries
export const addPastries = async (req, res, next) => {
   const { name, description, price, image } = req.body
   try {
      // console.log(req.body);
      // add pastries to the database
      const createResult = await Pastries.create({
         name, description, price, image
      });
      //return pastries
      res.status(201).json(createResult);
   } catch (error) {
      next(error);
   }
};


export const getPastries = async (req, res, next) => {
   try {
      //Get all pastries from database
      const findResult = await Pastries.find();
      //Return response
      res.status(200).json(findResult);

   } catch (error) {
      next(error);
   }
};

export const getOne = async (req, res, next) => {
   try {
      // Get single pastries ny id 
      const findByIdResult = await Pastries.findById(req.params.id);
      //Return 404 if no pastries is found 
      if (findByIdResult === null) {
         res.status(404).json({
            message: `Pastries with ID: ${req.params.id}not found `
         });
      } else {
         //Return  response
         res.status(200).json(findByIdResult);
      }
   } catch (error) {
      next(error);
   }


}

export const upDatePastries = async (req, res) => {
   let updateOnePastries = await Pastries.updateOne({ _id: req.params.id });
   res.status(200).json(updateOnePastries)
}

export const deletePastries = async (req, res) => {
   let deleteOnePastries = await Pastries.deleteOne({ _id: req.params.id })
   res.send(200).json(deleteOnePastries)
}