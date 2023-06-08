import express, { Request, Response, Application } from "express";
import StudentRoutes from "./routes/StudentRoutes";
import "reflect-metadata";

import AppDataSource from "./config/DataSource";

AppDataSource.initialize()
  .then(() => {
    console.log("database table is created successfully");
  })
  .catch((err) => {
    console.log(err);
  });
const app: Application = express();
const port = process.env.PORT || 4000;
app.use(express.json());
console.log("index.ts file", port);

if (!port) throw new Error(`port is undefined ${port}`);

app.use("/student",StudentRoutes)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
