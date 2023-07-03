"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.readTask = exports.createTask = void 0;
const database_connection_1 = __importDefault(require("../configs/database.connection"));
function createTask(task) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield database_connection_1.default.connect();
        try {
            yield client.query(`INSERT INTO to_do_list(task, is_done) VALUES ($1, $2)`, [task.name, false]);
        }
        catch (err) {
            return console.log(err);
        }
    });
}
exports.createTask = createTask;
function readTask() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield database_connection_1.default.connect();
        try {
            const allTasks = yield client.query(`SELECT * FROM to_do_list`);
            return allTasks.rows;
        }
        catch (err) {
            return console.log(err);
        }
    });
}
exports.readTask = readTask;
function updateTask(id, newTask) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield database_connection_1.default.connect();
        try {
            yield client.query(`UPDATE to_do_list
            SET task = $1, is_done = $2
            WHERE id = $3;
            `, [newTask.name, newTask.isDone, id]);
        }
        catch (err) {
            return console.log(err);
        }
    });
}
exports.updateTask = updateTask;
function deleteTask(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield database_connection_1.default.connect();
        try {
            yield client.query(`DELETE FROM to_do_list WHERE id = $1`, [id]);
        }
        catch (err) {
            return console.log(err);
        }
    });
}
exports.deleteTask = deleteTask;
