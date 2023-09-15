import { Router } from "express";
import { allCategory, createCategory } from "./category.controller.js";

const router = Router()

router.route('/category')
    .post(createCategory)
    .get(allCategory)

export default router