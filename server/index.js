import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import noteRoute from "./routes/notes.js";
import userRoute from "./routes/users.js";
import con from "./db/dbConnect.js";

const app = express();
con();
//!middlewares
app.use(express.json());
app.use(cors());

//!routes
app.use("/api/v1/notes", noteRoute);
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log("listen on port");
});
