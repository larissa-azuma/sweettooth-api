import { Router } from "express";
import { Register,Login } from "../controllers/users.controllers.js";

// create main router
const router=Router()

// create other routes
router.post('/register',Register)
router.post('/login',Login)

// export routes
export default router