import express, { Request, Response } from "express";
import postRoute from "./routes/postRoute";
import redirectRoute from "./routes/redirectRoute";
import path from "path";
const app = express();

// middlewares
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "../views");
app.use(express.static(path.join(__dirname, "..", "public")));

// routes
app.use("/ere", postRoute);

app.use(redirectRoute);
export default app;
