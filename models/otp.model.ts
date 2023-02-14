import mysql from 'mysql2/promise';
import { IotpModel, IotpdeleteModel} from '../@types/otpType';
//affiliate object create
export class otpModel {    
    mobileNo: string = "";
    otp: string ="";
    create_at = "";  
    
    sendotp = async function ({ mobileNo, otp, create_at}): Promise<string> {    
        this.mobileNo = mobileNo;
        this.otp = otp;
        this.create_at = create_at;
    
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        let sqlQuery="INSERT INTO `otpexpiry` (mobileNo,otp, create_at) VALUES (?,?,?)"
        let inserts= [mobileNo, otp, create_at]
        let result = await dbConn.query(sqlQuery, inserts)
        if (!result) {
            return "Error Occured";
        } else {
            return "OTP Sent Successfully";
        }
    }
    verifyotp = async function (otp): Promise<IotpModel[]> { 
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        var createdDate= new Date();
        const [results] = await dbConn.query<IotpModel[]>("SELECT * FROM otpexpiry where otp=?", [otp]);
        let result = await dbConn.query("DELETE FROM `otpexpiry` WHERE otp =?", [otp]);
        if(results!= null){
        const [exist] = await dbConn.query<IotpModel[]>("SELECT * FROM users where mobileNo=?", [results[0].mobileNo]);
        
        if(exist[0]== null){
            await dbConn.query("INSERT INTO `users` (mobileNo,createdDate) VALUES (?,?)", [results[0].mobileNo,createdDate]);
             }else{   
                await dbConn.query("UPDATE `users` SET mobileNo=?,createdDate=? WHERE mobileNo=? ",[exist[0].mobileNo,createdDate,exist[0].mobileNo]);
             }
        }
        return results;
    }



    
};