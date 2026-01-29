import view from "../models/views";
import { Request, Response, NextFunction } from 'express';

let viewsCount = async (req: Request, res: Response, next: NextFunction) => {
    if (req.cookies && req.cookies.hasViewed === 'true') {
        return res.render('landpage');
    }

    try {
        await view.findOneAndUpdate(
            { name: 'website' },
            { $inc: { count: 1 } },
            { upsert: true, new: true }
        );

        res.cookie('hasViewed', 'true', {
            maxAge: 7 * 24 * 60 * 60 * 1000, 
            httpOnly: true,                 
            secure: true,                  
            sameSite: 'lax',               
            path: '/'                      
        });

        return res.render('landpage');
    } catch (err) {
        console.error('View increment error: ', err);
        next(err);
    }
}

export default viewsCount;