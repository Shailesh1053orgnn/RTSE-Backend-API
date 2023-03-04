import dbConn from '../config/conn.js';
import { IStateModel } from '../@types/stateType';
//Call object create
export class stateModel {
    findAll = async function (): Promise<IStateModel[]> {
        await (await dbConn).connect();
        const [results] = await (await dbConn).query<IStateModel[]>("SELECT * from state");
        return results;
    }
    findById = async function ({ state_id }): Promise<IStateModel[]> {
        await (await dbConn).connect();
        const [results] = await (await dbConn).query<IStateModel[]>("SELECT *from state where state_id= ?", [state_id]);
        return results;
    }
};