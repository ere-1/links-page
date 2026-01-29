import connectDB from "../config/db";
import view from "../models/views";
import {Request , Response , NextFunction} from 'express';
let viewsCount = async (req: Request,res: Response,next: NextFunction) => {
    if (req.cookies && req.cookies.hasViewed){
        return res.render('landpage');
    }
    try {
        await connectDB();
        await view.findOneAndUpdate(
            {name: 'website'},
            {$inc: {count: 1}},
            {upsert: true, new: true}
        ).then((result) => {
            console.log(result)
        })
      res.cookie('hasViewed', 'true', {
    maxAge: 604800000, // 1 week in milliseconds
    httpOnly: true,    // Protects against XSS
    secure: true,      // Essential for Vercel/HTTPS
    sameSite: 'lax',   // Good balance for security and functionality
    path: '/'          // Ensures the cookie is available across your whole site
});
        res.render('landpage')
    } catch (err) {
        console.log('err: ', err)
        next(err);

    }
}


export default viewsCount;