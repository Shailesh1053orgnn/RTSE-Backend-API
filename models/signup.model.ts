import  pool from '../config/conn.js';
import { IsignupModel } from '../@types/signupType';
//affiliate object create
export class signupModel {
    fullName: string = "";
    mobileNo: string = "";
    userEmail: string = "";
    createdDate: string = "";
    otp:number;
    register = async function ({ fullName, mobileNo,otp, userEmail }): Promise<string> {    
        this.fullName = fullName;
        this.mobileNo = mobileNo;
        this.userEmail = userEmail;
        this.otp=otp;
        let createdDate = new Date;   
        const connection = await pool.getConnection();
        let sqlQuery="INSERT INTO `users` (fullName, mobileNo, userEmail, createdDate) VALUES (?,?,?,?)"
        let inserts= [fullName, mobileNo, userEmail, createdDate]
        let result = await connection.execute (sqlQuery, inserts)
        if (!result) {
            return "Error Occured";
        } else {
            return "Created Successfully";
        }
    } 
};