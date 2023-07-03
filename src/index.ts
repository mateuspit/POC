import express, { json, Request, Response } from "express";
import httpStatus from "http-status";
import toDoRouter from "../src/routers/toDo.routes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config()

const app = express();
app.use(json());
app.use(cors()); 

app.get("/health", (req: Request, res: Response) => {
    return res.sendStatus(httpStatus.OK);
});

app.use(toDoRouter);
///toDoRouter

const port: number = parseInt(process.env.PORT ?? '5000', 10);

//const port: number = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});