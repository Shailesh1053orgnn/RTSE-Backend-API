import { Request, Response, NextFunction } from 'express';
import { SplashScreenModel } from '../@types/SplashScreenType.js';
import { splashScreenModel } from '../models/Splashscreen.model.js';

 export class splashScreenController{
   static async saveImage(req:Request, res: Response){
        const image = new splashScreenModel();
        const returnValue: string = await image.saveImage({
            fileName: req.file.filename,
            fileURL:"../"+ req.file.destination +"/", 
            fileSize:req.file.filename,
            fileType:"image",
            fileDescription:"Description",
            createdDate: new Date()
            
        });
        res.status(200);
        res.send(returnValue);
   }
   static async findAll(req:Request, res: Response) {
    const image = new splashScreenModel();
    const returnValue: SplashScreenModel[] = await image.findAll();
    res.status(200);
    res.send(returnValue);
}
// static async findById(req:Request, res: Response) {
//     const image = new splashScreenModel();
//     const returnValue: IsplashScreenModel[] = await image.findById({
//         image_id:req.params.image_id,
//         affiliate_id:req.params.affiliate_id
//     });
//     res.status(200);
//     res.send(returnValue);
// }
// static async update(req:Request, res: Response) {
//     const image = new splashScreenModel();
//     const returnValue: string = await image.update({
//         latitude: req.body.latitude,
//         longitude: req.body.longitude,
//         affiliate_id: req.body.affiliate_id,
//         propertyimage_url:req.body.propertyimage_url, 
//         propertyimage_name:req.body.propertyimage_name,
//         file_type:"image",
//         image_dTime: new Date(),
//         image_id: parseInt(req.params.image_id)
//     });
//     res.status(200);
//     res.send(returnValue);
// }
// static async delete(req:Request, res: Response) {
//     const image = new splashScreenModel();
//     const returnValue: string = await image.delete({
//         image_id: parseInt(req.params.image_id)
//     });
//     res.status(200);
//     res.send(returnValue);
// }
}