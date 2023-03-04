import dbConn from '../config/conn.js';
import { ISportsModel } from '../@types/sportsType';
//Call object create
export class sportsModel {
    findAll = async function (): Promise<ISportsModel[]> {
        await (await dbConn).connect();
        const [results] = await (await dbConn).query<ISportsModel[]>("SELECT * from sports");
        return results;
    }
    findByName = async function ({ sportsname }): Promise<ISportsModel[]> {
        await (await dbConn).connect();
        const [results] = await (await dbConn).query<ISportsModel[]>("SELECT *from sports where sport_name= ?", [sportsname]);
        return results;
    }
};