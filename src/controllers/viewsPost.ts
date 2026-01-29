import {Response, Request } from 'express';
import view from '../models/views';

const viewsPost = async (req: Request, res: Response) => {
    try {
        const result = await view.findOne({ name: 'website'})
        res.json(result);
    } catch (err) {
        console.log(err)
    }
}
export default viewsPost;