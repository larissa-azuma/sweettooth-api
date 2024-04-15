import { Router } from "express";
import { Register } from "../controllers/users.controllers.js";

// create main router
const router=Router()

// create other routes
router.post('/register',Register)

// export routes
export default router