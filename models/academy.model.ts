import mysql from 'mysql2/promise';
import { IAcademyModel} from '../@types/academyType';
//Call object create
export class academyModel {
    findAll = async function (): Promise<IAcademyModel[]> { 
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        const [results] = await dbConn.query<IAcademyModel[]>("SELECT * from academy");
       return results;
    }

    findByLocation = async function ({location}): Promise<IAcademyModel[]> {
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        const [results] = await dbConn.query<IAcademyModel[]>("SELECT *from academy where location= ?", [location]);
        return results
        
    }
   
    
};