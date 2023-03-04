import mysql from 'mysql2/promise';
import Mailjet from 'node-mailjet';
import dotenv from 'dotenv';
dotenv.config();
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
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