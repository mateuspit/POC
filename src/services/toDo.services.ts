import { Task } from "../protocols";
import * as toDoRepository from "../repositories/toDo.repositories";

export function createTask(task: Task){
    return toDoRepository.createTask(task);
}

export function readTask(){
    return toDoRepository.readTask();
}

export function updateTask(task: Task){
    return toDoRepository.createTask(task);
}

export function deleteTask(task: Task){
    return toDoRepository.createTask(task);
}