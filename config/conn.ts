import mysql from 'mysql2/promise';
import Mailjet from 'node-mailjet';
import dotenv from 'dotenv';
dotenv.config();
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'joshi-test-2.cluster-crczv8slwvn6.us-east-1.rds.amazonaws.com',
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