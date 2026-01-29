import Router, { Express, Request, Response } from "express";

const router: Express = Router();

router.get('/',(_req: Request, res: Response) => {
  res.redirect("/ere");
});

export default router;
