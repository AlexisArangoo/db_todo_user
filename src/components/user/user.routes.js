import { Router } from "express";
import { allTasksUser, createUser } from "./user.controller.js";

const router = Router()

router.route('/users')
    .post(createUser)

router.route('/users/:id')
    .get(allTasksUser)

export default router