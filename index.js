import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Users, Orders } from "./models/userModel.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

try {
  await db.authenticate();
  console.log("Database Connected...");
  await Users.sync();
  await Orders.sync();
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:8081" }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
