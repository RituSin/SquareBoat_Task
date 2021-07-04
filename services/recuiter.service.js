const db = require("../config/db.config");

exports.register = (data, callback) => {
    console.log(data)
    db.query(
        `INSERT INTO RECRUITERS( Name, Phone, Email, Pwd) VALUES ( ?, ?, ?, ?)`,
        [data.name, data.phone, data.email, data.password],
        (error, results, fields) => {
            if(error){
                return callback(error);
            }
            return callback(null, 'SignUp Successful');
        }
    );
};


exports.login = (data, callback) => {
    db.query(
        `SELECT id FROM RECRUITERS WHERE email =  ?  AND pwd = ?`,
        [data.email, data.password],
        (error, results, fields) => {
            if(error){
                return callback(error);
            }
            if(results.length > 0){
                return callback(null, 'Login Successful');
            }
            else{
                return callback(null, 'Invalid Credentials');
            }
           
        }
    );
};

exports.viewCandidate = (data, callback) => {
    db.query(
        `SELECT c.name, c.email FROM CANDIDATES C JOIN CandidateJobs CJ 
        ON C.id = CJ.CandidateID JOIN JOBS J 
        ON CJ.JobID = J.id WHERE J.id = ?`,
        [data.id],
        (error, results, fields) => {
            if(error){
                return callback(error);
            }
            return callback(null, results);
           
        }
    );
};