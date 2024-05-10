import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT;

db.authenticate()
  .then(() => {
    console.log("Database Connected...");
    return db.sync();
  })
  .then(() => {
    console.log("Database synchronized...");
  })
  .catch((error) => {
    console.error("Connection error: ", error);
  });

app.use(cors({credentials: true, origin:'http://localhost:8081'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));