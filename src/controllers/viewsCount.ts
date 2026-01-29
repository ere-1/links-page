import view from "../models/views";
import {Request , Response , NextFunction} from 'express';
let viewsCount = async (req: Request,res: Response,next: NextFunction) => {
    if (req.cookies && req.cookies.hasViewed){
        return res.render('landpage');
    }
    try {
        await view.findOneAndUpdate(
            {name: 'website'},
            {$inc: {count: 1}},
            {upsert: true, new: true}
        ).then((result) => {
            console.log(result)
        })
        res.cookie('hasViewed','true')
        res.render('landpage')
    } catch (err) {
        console.log('err: ', err)
        next(err);

    }
}


export default viewsCount;