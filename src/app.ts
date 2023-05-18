import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

import userRouters from "./app/modules/user/user.route";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouters);

export default app;

//for incert data on darabase we need to pass some step
/**
 * create interface done✅
 * create schema done✅
 * create model
 * database quirey on model
 */
//pattern MVC(model view controller) / moduler

/**
 * Interface => user.interface.ts
 * schema/model => user.model.ts
 */
