import { Request, Response } from "express";
import * as gameService from "../services/toDo.services";
import httpStatus from "http-status";

export function createTask(req: Request, res: Response){
    const task = req.body as import("../protocols").Task
    gameService.createTask(task);

    return res.sendStatus(httpStatus.CREATED);
}

export function readTask(req: Request, res: Response){

}

export function updateTask(req: Request, res: Response){

}

export function deleteTask(req: Request, res: Response){

}