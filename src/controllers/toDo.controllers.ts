import { Request, Response } from "express";
import * as gameService from "../services/toDo.services";
import httpStatus from "http-status";
import { ID } from "../protocols";

export function createTask(req: Request, res: Response) {
    const task = req.body as import("../protocols").Task;
    gameService.createTask(task);

    return res.sendStatus(httpStatus.CREATED);
}

export function readTask(req: Request, res: Response) {
    const allTasks = gameService.readTask();
    return res.send(allTasks);
}

export function updateTask(req: Request, res: Response) {
    //const id = req.params.id as ID;
    const id = parseInt(req.params.id, 10) as ID;
    const newTask = req.body as import("../protocols").Task;
    gameService.updateTask(id, newTask);
    return res.sendStatus(httpStatus.OK);
}

export function deleteTask(req: Request, res: Response) {
    const id = Number(req.params.is) as ID;;
    gameService.deleteTask(id);
    return res.sendStatus(httpStatus.OK);
}