import  dbConn from '../config/conn.js';
import { IAcademyModel} from '../@types/academyType';
//Call object create
export class academyModel {
    findAll = async function (): Promise<IAcademyModel[]> { 
        await (await dbConn).connect();
        const [results] = await (await dbConn).query<IAcademyModel[]>("SELECT * from academy");
       return results;
    }
    findByLocation = async function ({location}): Promise<IAcademyModel[]> {
        await (await dbConn).connect();
        const [results] = await (await dbConn).query<IAcademyModel[]>("SELECT *from academy where location= ?", [location]);
        return results   
    }
};