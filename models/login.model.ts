import  dbConn from '../config/conn.js';
import { ILoginModel } from '../@types/loginType';
export class loginModel {
    login = async function (otp): Promise<ILoginModel[]> {
        await (await dbConn).connect();
        const [results] = await (await dbConn).query<ILoginModel[]>("SELECT * FROM users where otp=?", [otp]);
        console.log(results);
       return results;
    }
};