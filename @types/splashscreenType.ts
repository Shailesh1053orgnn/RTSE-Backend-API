import { RowDataPacket } from "mysql2";
interface SplashScreenModel extends RowDataPacket{
    fileName:string
    fileURL: string
    fileType: string
    fileSize: string
    fileDescription:string   
}
export type {
    SplashScreenModel
   
}