import  dbConn from '../config/conn.js';
import { ISpaceTypeModel} from '../@types/spaceTypeType';
//Call object create
export class spaceTypeModel {
    findAll = async function (): Promise<ISpaceTypeModel[]> { 
        await (await dbConn).connect();
        const [results] = await (await dbConn).query<ISpaceTypeModel[]>("SELECT * from space_type");
       return results;
    }
    findById = async function ({id}): Promise<ISpaceTypeModel[]> {
        await (await dbConn).connect();
        const [results] = await (await dbConn).query<ISpaceTypeModel[]>("SELECT *from space_type where space_type_id= ?", [id]);
        return results;
    }   
};