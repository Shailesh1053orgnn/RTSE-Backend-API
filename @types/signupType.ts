import { RowDataPacket } from "mysql2";
interface IsignupModel extends RowDataPacket{
    fullName: string
    mobileNo: string
    userEmail: string
    createdDate: string
    otp:number
    
}
export type {
    IsignupModel
}