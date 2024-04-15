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