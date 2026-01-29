import Router from 'express';
import viewsPost from '../controllers/viewsPost';

const router = Router();

router.get('/', viewsPost)

export default router;