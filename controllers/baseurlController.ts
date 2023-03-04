import {Request,Response,NextFunction} from 'express';
export class baseurlController {
    static async baseurl(req: Request, res: Response) {
        res.status(200).send({ "status": 200, "success": true, data:"https://api.replsports.com"});
    }  
}