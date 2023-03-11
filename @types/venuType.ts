import { RowDataPacket } from "mysql2";
interface IVenueModel extends RowDataPacket{
    venue_id: number
    
}
export type {
    IVenueModel
}