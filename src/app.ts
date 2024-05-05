import express from "express";
import type { Request, Response } from "express";
import UsersController from "./controllers/users.controller";

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});

app.use("/users", UsersController);

export default app;
