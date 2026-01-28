import Router, { Express, Request, Response } from "express";

const router: Express = Router();

router.use((req: Request, res: Response) => {
  res.redirect("/ere");
});

export default router;
