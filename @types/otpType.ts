import { RowDataPacket } from "mysql2";
interface IotpModel extends RowDataPacket{    
    mobileNo: string,
    otp: string,
    create_at: string    
}
interface IotpdeleteModel extends RowDataPacket{    
    otp: string 
}
export type {
    IotpModel, IotpdeleteModel
}