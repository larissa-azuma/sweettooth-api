import {Users} from '../models/users.js'

// user signup
export const Register=async (req,res,next)=>{
  const{name,email,password} =req.body
 try {
    //create user account
    const createUser= await Users.create({
        name,email,password  
    })
    //return response
    res.status(201).json(createUser)
    
 } catch (error) {
    next(error)
 }
}

//User Login
export const Login=async (req,res,next)=>{
   const{name,email,password} =req.body
  try {
     //create user account
     const Login= await Users.findOne({
         email,password  
     })
     //return response
     res.status(201).json(Login)
     
  } catch (error) {
     next(error)
  }
 }