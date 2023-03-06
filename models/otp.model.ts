import pool from '../config/conn.js';
import { IotpModel, IotpdeleteModel } from '../@types/otpType';
//affiliate object create
export class otpModel {
    mobileNo: string = "";
    otp: string = "";
    create_at = "";
    sendotp = async function ({ mobileNo, otp, create_at }): Promise<string> {
        this.mobileNo = mobileNo;
        this.otp = otp;
        this.create_at = create_at;
        const connection = await pool.getConnection();
        const [results] = await connection.execute <IotpModel[]>("SELECT * FROM users where mobileNo=?", [mobileNo]);
        if (results.length == 0) {
            return "user not exist";
        } else {
            let sqlQuery = "INSERT INTO `otpexpiry` (mobileNo,otp, create_at) VALUES (?,?,?)"
            let inserts = [mobileNo, otp, create_at]
            let userResult = await connection.execute (sqlQuery, inserts)
            return "Ready For otp"
        }
    }
    verifyotp = async function (otp): Promise<IotpModel[]> {
        const connection = await pool.getConnection();
        var createdDate = new Date();
        const [results] = await connection.execute <IotpModel[]>("SELECT * FROM otpexpiry where otp=?", [otp]);
        let result = await connection.execute ("DELETE FROM `otpexpiry` WHERE otp =?", [otp]);
        if (results != null) {
            const [exist] = await connection.execute <IotpModel[]>("SELECT * FROM users where mobileNo=?", [results[0].mobileNo]);
            if (exist[0] == null) {
                await connection.execute ("INSERT INTO `users` (mobileNo,createdDate) VALUES (?,?)", [results[0].mobileNo, createdDate]);
            } else {
                await connection.execute ("UPDATE `users` SET mobileNo=?,createdDate=? WHERE mobileNo=? ", [exist[0].mobileNo, createdDate, exist[0].mobileNo]);
            }
        }
        return results;
    }
};