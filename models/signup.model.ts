import mysql from 'mysql2/promise';
import { IsignupModel } from '../@types/signupType';
//affiliate object create
export class signupModel {
    fullName: string = "";
    mobileNo: string = "";
    userEmail: string = "";
    createdDate: string = "";
    otp:number;
    register = async function ({ fullName, mobileNo,otp, userEmail, createdDate }): Promise<string> {    
        this.fullName = fullName;
        this.mobileNo = mobileNo;
        this.userEmail = userEmail;
        this.otp=otp;
        this.createdDate = createdDate;   
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        let sqlQuery="INSERT INTO `users` (fullName, mobileNo, userEmail, otp, createdDate) VALUES (?,?,?,?,?)"
        let inserts= [fullName, mobileNo, userEmail, otp, createdDate]
        let result = await dbConn.query(sqlQuery, inserts)
        if (!result) {
            return "Error Occured";
        } else {
            return "Created Successfully";
        }
    } 
};