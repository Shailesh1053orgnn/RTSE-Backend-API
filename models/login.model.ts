import pool from '../config/conn.js';
import { ILoginModel } from '../@types/loginType';
export class loginModel {
    login = async function (otp): Promise<ILoginModel[]> {
        const connection = await pool.getConnection();
        const [results] = await connection.execute <ILoginModel[]>("SELECT * FROM users where otp=?", [otp]);
        console.log(results);
        return results;
    }
};