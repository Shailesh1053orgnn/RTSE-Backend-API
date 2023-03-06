import pool from '../config/conn.js';
import { ISpaceTypeModel } from '../@types/spaceTypeType';
//Call object create
export class spaceTypeModel {
    findAll = async function (): Promise<ISpaceTypeModel[]> {
        const connection = await pool.getConnection();
        const [results] = await connection.execute <ISpaceTypeModel[]>("SELECT * from space_type");
        return results;
    }
    findById = async function ({ id }): Promise<ISpaceTypeModel[]> {
        const connection = await pool.getConnection();
        const [results] = await connection.execute <ISpaceTypeModel[]>("SELECT *from space_type where space_type_id= ?", [id]);
        return results;
    }
};