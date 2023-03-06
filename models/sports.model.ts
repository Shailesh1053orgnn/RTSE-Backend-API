import pool from '../config/conn.js';
import { ISportsModel } from '../@types/sportsType';
//Call object create
export class sportsModel {
    findAll = async function (): Promise<ISportsModel[]> {
        const connection = await pool.getConnection();
        const [results] = await connection.execute <ISportsModel[]>("SELECT * from sports");
        return results;
    }
    findByName = async function ({ sportsname }): Promise<ISportsModel[]> {
        const connection = await pool.getConnection();
        const [results] = await connection.execute <ISportsModel[]>("SELECT *from sports where sport_name= ?", [sportsname]);
        return results;
    }
};