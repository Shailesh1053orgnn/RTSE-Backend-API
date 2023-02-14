import { RowDataPacket } from "mysql2";
interface IAcademyModel extends RowDataPacket{
    location: string
}
export type {
    IAcademyModel
}