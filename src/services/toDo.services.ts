import { Task, ID } from "../protocols";
import * as toDoRepository from "../repositories/toDo.repositories";

export function createTask(task: Task) {
    return toDoRepository.createTask(task);
}

export function readTask() {
    return toDoRepository.readTask();
}

export function updateTask(id: ID, newTask: Task) {
    return toDoRepository.updateTask(id, newTask);
    //return toDoRepository.createTask(id);
}

export function deleteTask(id: ID) {
    return toDoRepository.deleteTask(id);
}