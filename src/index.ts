import express, { json, Request, Response } from "express";
import httpStatus from "http-status";
import toDoRouter from "./routers/toDo.routes";

const app = express();
app.use(json());

app.get("/health", (req: Request, res: Response) => {
    return res.sendStatus(httpStatus.OK);
});

app.use(toDoRouter);
///toDoRouter

//const port: number = parseInt(process.env.PORT) || 5000;
const port: number = 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});