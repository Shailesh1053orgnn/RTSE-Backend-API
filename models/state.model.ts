import pool from '../config/conn.js';
import { IStateModel } from '../@types/stateType';
//Call object create
export class stateModel {
    findAll = async function (): Promise<IStateModel[]> {
        const connection = await pool.getConnection();
        const [results] = await connection.execute <IStateModel[]>("SELECT * from state");
        return results;
    }
    findById = async function ({ state_id }): Promise<IStateModel[]> {
        const connection = await pool.getConnection();
        const [results] = await connection.execute <IStateModel[]>("SELECT *from state where state_id= ?", [state_id]);
        return results;
    }
};