import mysql from 'mysql2/promise';
import { ILoginModel } from '../@types/loginType';
export class loginModel {
    login = async function (otp): Promise<ILoginModel[]> { 
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        const [results] = await dbConn.query<ILoginModel[]>("SELECT * FROM users where otp=?", [otp]);
        console.log(results);
       return results;
    }
};