import { Router } from "express";
import { getReviews, addReviews, upDateReviews, getOne, deleteReviews, } from "../controllers/reviews.controllers.js";

// //Create malter upload middlewares
// const upload = multer({ dest: 'uploads/images' });

//Create recipes router

const router = Router();

//Define routes
router.post('/', addReviews);

router.get('/', getReviews);

router.get('/:id', getOne);

router.get('/:id', addReviews);

router.patch('/:id', upDateReviews);

router.delete('/:id', deleteReviews);

//Export router
export default router;