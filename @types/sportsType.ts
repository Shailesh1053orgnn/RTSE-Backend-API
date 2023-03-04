import { RowDataPacket } from "mysql2";
interface ISportsModel extends RowDataPacket{
    sports: string
}
export type {
    ISportsModel
}