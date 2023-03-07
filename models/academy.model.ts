import  pool from '../config/conn.js';
import { IAcademyModel} from '../@types/academyType';
//Call object create
export class academyModel {
    findAll = async function (): Promise<IAcademyModel[]> { 
        const connection = await pool.getConnection();
        const [results] = await connection.execute <IAcademyModel[]>("SELECT * from academy");
       return results
    }
    findById = async function ({academy_id}): Promise<IAcademyModel[]> {
        const connection = await pool.getConnection();
        const [results] = await connection.execute <IAcademyModel[]>("SELECT *from academy where academy_id= ?", [academy_id]);
        console.log(results)
        return results   
    }
};