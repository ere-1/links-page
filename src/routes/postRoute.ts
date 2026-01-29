import Router, { Request, Response } from "express";
import viewsCount from "./../controllers/viewsCount";

const router = Router();

router.get("/", viewsCount);

export default router;
