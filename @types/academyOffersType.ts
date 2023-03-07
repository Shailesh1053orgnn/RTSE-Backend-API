import { RowDataPacket } from "mysql2";
interface IAcademyOffersModel extends RowDataPacket{
    academy_id: number
}
export type {
    IAcademyOffersModel
}