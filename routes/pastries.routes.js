import { Router } from "express";

import { getPastries, addPastries, upDatePastries, getOne, deletePastries, } from "../controllers/pastries.controllers.js";

//Create malter upload middlewares


//Create recipes router

const router = Router();

//Define routes
router.post('/', addPastries);

router.get('/', getPastries);

router.get('/:id', getOne);

router.get('/:id', addPastries);

router.patch('/:id', upDatePastries);

router.delete('/:id', deletePastries);

//Export router
export default router;
