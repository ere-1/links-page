import express from "express";
import postRoute from "./routes/postRoute";
import redirectRoute from "./routes/redirectRoute";
import api from "./routes/api";
import cookieParser from 'cookie-parser';
import path from "path";


const app = express();


// middlewares
app.use(express.json());
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.use(express.static(path.join(__dirname, "..", "public")));



// routes

app.use('/api/views', api);
app.use("/ere", postRoute);
app.use(redirectRoute);

export default app;
