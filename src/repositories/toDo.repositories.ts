import { ID, Task } from "../protocols";
import pool from "../configs/database.connection";

export async function createTask(task: Task) {
    const client = await pool.connect();
    try {
        await client.query(`INSERT INTO to_do_list(task, is_done) VALUES ($1, $2)`, [task.name, false]);
    }
    catch (err) {
        return console.log(err);
    }
}

export async function readTask() {
    const client = await pool.connect();
    try {
        const allTasks = await client.query(`SELECT * FROM to_do_list`);
        return allTasks.rows;
    }
    catch (err) {
        return console.log(err);
    }
}

export async function updateTask(id: ID, newTask: Task) {
    const client = await pool.connect();
    try {
        await client.query(`UPDATE to_do_list
            SET task = $1, is_done = $2
            WHERE id = $3;
            `, [newTask.name, newTask.isDone, id]);
    }
    catch (err) {
        return console.log(err);
    }
}

export async function deleteTask(id: ID) {
    const client = await pool.connect();
    try {
        await client.query(`DELETE FROM to_do_list WHERE id = $1`, [id]);
    }
    catch (err) {
        return console.log(err);
    }
}