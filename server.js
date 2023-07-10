import express from "express";
import apiRoutes from "./routes/apiRoutes.js";
import cors from "cors";
const app = express();

//for cors origin
app.use(cors());

// for reciveing dta
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//creating the server
const PORT = process.env.PORT || 8080;
app.use("/api/", apiRoutes);

app.listen(PORT, console.log("Listening at ", PORT));
