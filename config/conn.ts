import mysql from 'mysql2/promise';
import Mailjet from 'node-mailjet';
import dotenv from 'dotenv';
dotenv.config();
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'rtse-sports.cmihklc4k4mb.ap-south-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'Delhi123$',
  database : 'rtsc_sports'
});
// const mailjet = Mailjet.apiConnect(
//   process.env.MJ_APIKEY_PUBLIC,
//   process.env.MJ_APIKEY_PRIVATE,
//   {
//     config: {},
//     options: {}
//   } 
// );

export default dbConn;