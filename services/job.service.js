const db = require("../config/db.config");

exports.postJob = (data, callback) => {   
    db.query(
        `INSERT INTO JOBS( Comapany, profile, experience, location, skills, requirement) VALUES ( ?, ?, ?, ?, ?, ?)`,
        [data.company, data.profile, data.experience, data.location, data.skills, data.requirement],
        (error, results, fields) => {
            if(error){
                return callback(error);
            }
            return callback(null, 'Job inserted successfully');
        }
    );
};


exports.getallJob = (data, callback) => { 
    console.log("query", data)
    // db.query(
    //     `SELECT * FROM JOBS where profile like '%?%' or skills like '%?%' or requirement '%?%' or  PostedBy like '%?%' `,
    //     [data.profile, data.description, data.description, data.recruiter],
    //     (error, results, fields) => {
    //         if(error){
    //             return callback(error);
    //         }
    //         return callback(null, results);
    //     }
    // );  
    if(data.profile){
        db.query(
            `SELECT * FROM JOBS where profile like '%${data.profile}%' `,
            [],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    }
    else if(data.description){
        db.query(
            `SELECT * FROM JOBS where skills like '%${data.skills}%' `,
            [],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    }
    else if(data.description){
        db.query(
            `SELECT * FROM JOBS where PostedBy like '%${data.recruiter}%'`,
            [],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    }
    else {
        db.query(
            `SELECT * FROM JOBS`,
            [],
            (error, results, fields) => {
                if(error){
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    }

   
};
