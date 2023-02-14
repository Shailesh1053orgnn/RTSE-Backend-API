import mysql from 'mysql2/promise';
import { ISpaceTypeModel} from '../@types/spaceTypeType';
//Call object create
export class spaceTypeModel {
    findAll = async function (): Promise<ISpaceTypeModel[]> { 
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        const [results] = await dbConn.query<ISpaceTypeModel[]>("SELECT * from space_type");
       return results;
    }

    findById = async function ({id}): Promise<ISpaceTypeModel[]> {
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        const [results] = await dbConn.query<ISpaceTypeModel[]>("SELECT *from space_type where space_type_id= ?", [id]);
        return results;
       
    }
   
    
};