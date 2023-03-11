import pool from '../config/conn.js';
import { IVenueModel } from '../@types/venuType';
//Call object create
export class venueModel {
    findAll = async function (): Promise<IVenueModel[]> {
        const connection = await pool.getConnection();
        const [results] = await connection.execute <IVenueModel[]>("SELECT * from venue,venue_details");
        return results;
    }
    findById = async function ({ venue_id }): Promise<IVenueModel[]> {
        const connection = await pool.getConnection();
        const [results] = await connection.execute <IVenueModel[]>("SELECT * from venue where venue_id= ?", [venue_id]);
        return results;
    }
};