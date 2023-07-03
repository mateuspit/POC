import { Router } from "express";
import * as toDoController from "../controllers/toDo.controllers.js"

const toDoRouter = Router();

toDoRouter.post("/tasks", toDoController.createTask);
toDoRouter.get("/tasks", toDoController.readTask);
toDoRouter.put("/tasks/:id", toDoController.updateTask);
toDoRouter.delete("/tasks/:id", toDoController.deleteTask);

export default toDoRouter;