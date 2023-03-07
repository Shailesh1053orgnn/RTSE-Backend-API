import pool from '../config/conn.js';
import { IAcademyOffersModel } from '../@types/academyOffersType';
//Call object create
export class AcademyOffersModel {
    // findAll = async function (): Promise<IAcademyOffersModel[]> {
    //     const connection = await pool.getConnection();
    //     const [results] = await connection.execute <IAcademyOffersModel[]>("SELECT * from academy_offers");
    //     return results;
    // }
    findById = async function ({ academy_id }): Promise<IAcademyOffersModel[]> {
        const connection = await pool.getConnection();
        const [results] = await connection.execute <IAcademyOffersModel[]>("SELECT *from academy_offers where academy_id= ?", [academy_id]);
        return results;
    }
};