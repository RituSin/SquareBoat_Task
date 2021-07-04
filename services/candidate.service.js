const db = require("../config/db.config");

exports.register = (data, callback) => {
   
    db.query(
        `INSERT INTO CANDIDATES( Name, Phone, Email, Pwd) VALUES ( ?, ?, ?, ?)`,
        [data.name, data.phone, data.email, data.password],
        (error, results, fields) => {
            if(error){
                return callback(error);
            }
            return callback(null, 'SignUp of Candidate Successful');
        }
    );
};


exports.login = (data, callback) => {
    db.query(
        `SELECT id FROM CANDIDATES WHERE email =  ?  AND pwd = ?`,
        [data.email, data.password],
        (error, results, fields) => {
            if(error){
                return callback(error);
            }
            if(results.length > 0){
                return callback(null, 'Login of Candidate Successful');
            }
            else{
                return callback(null, 'Invalid Credentials');
            }
           
        }
    );
};

exports.jobApply = (data, callback) => {
    db.query(
        `INSERT INTO CandidateJobs( JOBID, CANDIDATEID) VALUES ( ?, ?)`,
        [data.canID, data.jobId],
        (error, results, fields) => {
            if(error){
                return callback(error);
            }
            return callback(null, 'Candidate Applied Successful');
           
        }
    );
};