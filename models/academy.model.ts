import  pool from '../config/conn.js';
import { IAcademyModel} from '../@types/academyType';
//Call object create
export class academyModel {
    findAll = async function (): Promise<IAcademyModel[]> { 
        const connection = await pool.getConnection();
        const [results] = await connection.execute <IAcademyModel[]>("SELECT * from academy");
       return results;
    }
    findByLocation = async function ({location}): Promise<IAcademyModel[]> {
        const connection = await pool.getConnection();
        const [results] = await connection.execute <IAcademyModel[]>("SELECT *from academy where location= ?", [location]);
        return results   
    }
};