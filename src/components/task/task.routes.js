import { Router } from "express";
import { allTasks, createTask, deleteTask, upDateTaks } from "./task.controller.js";

const router = Router()

router.route('/task')
    .post(createTask)
    .get(allTasks)

router.route('/task/:id')
    .put(upDateTaks)
    .delete(deleteTask)
    
export default router