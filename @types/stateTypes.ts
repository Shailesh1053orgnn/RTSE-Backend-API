import { RowDataPacket } from "mysql2";
interface IStateModel extends RowDataPacket{
    state_id: number
    
}
export type {
    IStateModel
}