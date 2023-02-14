import mysql from 'mysql2/promise';
import { SplashScreenModel } from '../@types/SplashScreenType';
//property Image object
export class splashScreenModel {
    fileName:string = "";
    fileURL: string = "";
    fileType: string = "";
    fileSize: string = "";
    fileDescription:string = "";    
    createdDate:Date;
    saveImage = async function ({ fileName, fileURL, fileType, fileSize, fileDescription, createdDate}): Promise<string> {
        this.fileName=fileName;
        this.fileURL=fileURL;
        this.fileType= fileType;
        this. fileSize= fileSize;
        this.fileDescription= fileDescription;
        this.createdDate= createdDate;
        
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        let result = await dbConn.query(
            "INSERT INTO `splashscreen`(`fileName`, `fileURL`, `fileType`, `fileSize`, `fileDescription`, `createdDate`) VALUES (?,?,?,?,?,?)",
            [fileName, fileURL, fileType, fileSize, fileDescription, createdDate]
        );
        if (!result) {
            return "Error Occured";
        } else {
            return "Saved Successfully";
        }
    }
    findAll = async function (): Promise<SplashScreenModel[]> { 
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        const [results] = await dbConn.query<SplashScreenModel[]>("select * from splashscreen");
       return results;
    }

    // findById = async function ({image_id,affiliate_id}): Promise<IPhotoTakingModel[]> {
    //     const dbConn = await mysql.createConnection({
    //         host     : process.env.HOST,
    //         user     : process.env.USER,
    //         password : process.env.PASSWORD,
    //         database : process.env.DATABASE
    //       });
    //     await dbConn.connect();
    //     const [results] = await dbConn.query<IPhotoTakingModel[]>("select * from geophototaking WHERE img_id = ? AND affiliate_id=? ", [image_id,affiliate_id], );
    //    return results;
    // }
    // // update for class
    // update = async function ({ latitude, longitude, affiliate_id, propertyimage_url, propertyimage_name,file_type,image_dTime,image_id   }): Promise<string> {
    //     this.latitude= latitude;
    //     this.longitude= longitude;
    //     this.affiliate_id= affiliate_id;
    //     this.propertyimage_url= propertyimage_url;
    //     this.propertyimage_name= propertyimage_name;
    //     this.file_type= file_type;
    //     this.image_dTime= image_dTime;
    //     this.image_id = image_id;
    //     // saving in database
    //     const dbConn = await mysql.createConnection({
    //         host     : process.env.HOST,
    //         user     : process.env.USER,
    //         password : process.env.PASSWORD,
    //         database : process.env.DATABASE
    //     });
    //     await dbConn.connect();
    //     let result = await dbConn.query("UPDATE geophototaking SET latitude=?, longitude=?, affiliate_id=?, propertyimage_url=?, propertyimage_name=?,file_type=?,image_dTime=? WHERE img_id= ?",[latitude, longitude, affiliate_id, propertyimage_url, propertyimage_name,file_type,image_dTime,image_id],
    //     );
    //     if (!result) {
    //         return "Error Occured";
    //     } else {
    //         return "Updated Successfully";
    //     }
    // }
    // // Delete for class
    // delete = async function ({ image_id }: IPhotoTakingModelDelete): Promise<string> {
    //     this.image_id =image_id;
    //     // saving in database
    //     const dbConn = await mysql.createConnection({
    //         host     : process.env.HOST,
    //         user     : process.env.USER,
    //         password : process.env.PASSWORD,
    //         database : process.env.DATABASE
    //     });
    //     await dbConn.connect();
    //     let result = await dbConn.query("DELETE FROM geophototaking WHERE img_id = ?", [image_id],
    //     );
    //     if (!result) {
    //         return "Error Occured";
    //     } else {
    //         return "Image Deleted Successfully";
    //     }
    // }
    
};