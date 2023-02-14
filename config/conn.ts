import mysql from 'mysql2/promise';
import Mailjet from 'node-mailjet';
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE
});
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE,
  {
    config: {},
    options: {}
  } 
);

export default { dbConn,mailjet };