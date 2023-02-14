import mysql from 'mysql2/promise';
import { IStateModel} from '../@types/stateTypes';
//Call object create
export class stateMgmtModel {
    findAll = async function (): Promise<IStateModel[]> { 
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        const [results] = await dbConn.query<IStateModel[]>("SELECT * from state");
       return results;
    }

    findById = async function ({state_id}): Promise<IStateModel[]> {
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        const [results] = await dbConn.query<IStateModel[]>("SELECT *from state where state_id= ?", [state_id]);
        return results;
       
    }
   
    
};