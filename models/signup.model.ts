import mysql from 'mysql2/promise';
import { IsignupModel } from '../@types/signupType';
//affiliate object create
export class signupModel {
    fullName: string = "";
    mobileNo: string = "";
    userEmail: string = "";
    createdDate: string = "";
    otp:number;
    
    register = async function ({ fullName, mobileNo,otp, userEmail, createdDate }): Promise<string> {    
        this.fullName = fullName;
        this.mobileNo = mobileNo;
        this.userEmail = userEmail;
        this.otp=otp;
        this.createdDate = createdDate;   
        
        
        const dbConn = await mysql.createConnection({
            host     : process.env.HOST,
            user     : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE
          });
        await dbConn.connect();
        let sqlQuery="INSERT INTO `users` (fullName, mobileNo, userEmail, otp, createdDate) VALUES (?,?,?,?,?)"
        let inserts= [fullName, mobileNo, userEmail, otp, createdDate]
        let result = await dbConn.query(sqlQuery, inserts)
        if (!result) {
            return "Error Occured";
        } else {
            return "Created Successfully";
        }
    }
    // findAll = async function (affiliate_id:number): Promise<ILeadModel[]> { 
    //     const dbConn = await mysql.createConnection({
    //         host     : process.env.HOST,
    //         user     : process.env.USER,
    //         password : process.env.PASSWORD,
    //         database : process.env.DATABASE
    //       });
    //     await dbConn.connect();
    //     const [results] = await dbConn.query<ILeadModel[]>("select * from users where lead_leadOwner=?", [affiliate_id] );
    //    return results;
    // }

    // findById = async function ({lead_id,affiliate_id}): Promise<ILeadModel[]> {
    //     const dbConn = await mysql.createConnection({
    //         host     : process.env.HOST,
    //         user     : process.env.USER,
    //         password : process.env.PASSWORD,
    //         database : process.env.DATABASE
    //       });
    //     await dbConn.connect();
    //     const [results] = await dbConn.query<ILeadModel[]>("select * from lead WHERE lead_id = ? AND lead_leadOwner = ? ", [lead_id,affiliate_id], );
    //    return results;
    // }
    // // update for class
    // update = async function ({ fullName, mobileNo, userEmail, createdDate  }): Promise<string> {
    //     this.fullName = fullName;
    //     this.mobileNo = mobileNo ;
    //     this.userEmail = userEmail;
    //     this.createdDate = createdDate;        
       
        
    //     // saving in database
    //     const dbConn = await mysql.createConnection({
    //         host     : process.env.HOST,
    //         user     : process.env.USER,
    //         password : process.env.PASSWORD,
    //         database : process.env.DATABASE
    //     });
    //     await dbConn.connect();
    //     let result = await dbConn.query("UPDATE lead SET lead_leadCode=?,lead_leadOwner=?,lead_property_id=?,lead_leadEmail=?,lead_leadName=?,lead_leadLastName=?,lead_leadSource=?,lead_leadIndustry=?,lead_leadRating=?,lead_leadMobile=?,lead_leadAddress=?,lead_leadCity=?,lead_leadState=?,lead_leadPin=?,lead_leadCountry=?,lead_leadStage=?,lead_leadActivities=?,lead_createdBy=?,lead_history=? WHERE lead_id= ? AND lead_leadOwner=?",[lead_leadCode,lead_leadOwner,lead_property_id,lead_leadEmail,lead_leadName,lead_leadLastName,lead_leadSource,lead_leadIndustry,lead_leadRating,lead_leadMobile,lead_leadAddress,lead_leadCity,lead_leadState,lead_leadPin,lead_leadCountry,lead_leadStage,lead_leadActivities,lead_createdBy,lead_history,lead_id,affiliate_id],
    //     );
    //     if (!result) {
    //         return "Error Occured";
    //     } else {
    //         return "Updated Successfully";
    //     }
    // }
    // // Delete for class
    // delete = async function ({ lead_id, affiliate_id }: ILeadModelDelete): Promise<string> {
    //     this.lead_id =lead_id;
    //     this.affiliate_id =affiliate_id;
    //     // saving in database
    //     const dbConn = await mysql.createConnection({
    //         host     : process.env.HOST,
    //         user     : process.env.USER,
    //         password : process.env.PASSWORD,
    //         database : process.env.DATABASE
    //     });
    //     await dbConn.connect();
    //     let result = await dbConn.query("DELETE FROM `lead` WHERE lead_id =? AND lead_leadOwner=?", [lead_id, affiliate_id],
    //     );
    //     if (!result) {
    //         return "Error Occured";
    //     } else {
    //         return "Deleted Successfully";
    //     }
    // }
    
};