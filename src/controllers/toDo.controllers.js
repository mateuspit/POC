"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.readTask = exports.createTask = void 0;
const gameService = __importStar(require("../services/toDo.services"));
const http_status_1 = __importDefault(require("http-status"));
function createTask(req, res) {
    const task = req.body;
    gameService.createTask(task);
    return res.sendStatus(http_status_1.default.CREATED);
}
exports.createTask = createTask;
function readTask(req, res) {
    const allTasks = gameService.readTask();
    return res.send(allTasks);
}
exports.readTask = readTask;
function updateTask(req, res) {
    const id = parseInt(req.params.id, 10);
    const newTask = req.body;
    gameService.updateTask(id, newTask);
    return res.sendStatus(http_status_1.default.OK);
}
exports.updateTask = updateTask;
function deleteTask(req, res) {
    const id = Number(req.params.is);
    ;
    gameService.deleteTask(id);
    return res.sendStatus(http_status_1.default.OK);
}
exports.deleteTask = deleteTask;
