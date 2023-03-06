import pool from '../config/conn.js';
import { SplashScreenModel } from '../@types/splashScreenType';
//property Image object
export class splashScreenModel {
    fileName: string = "";
    fileURL: string = "";
    fileType: string = "";
    fileSize: string = "";
    fileDescription: string = "";
    createdDate: Date;
    saveImage = async function ({ fileName, fileURL, fileType, fileSize, fileDescription, createdDate }): Promise<string> {
        this.fileName = fileName;
        this.fileURL = fileURL;
        this.fileType = fileType;
        this.fileSize = fileSize;
        this.fileDescription = fileDescription;
        this.createdDate = createdDate;
        const connection = await pool.getConnection();
        let result = await connection.execute (
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
        const connection = await pool.getConnection();
        const [results] = await connection.execute <SplashScreenModel[]>("select * from splashscreen");
        return results;
    }

};