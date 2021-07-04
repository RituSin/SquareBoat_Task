const candidateService = require("../services/candidate.service");

exports.register = (req , res, next) => {
    console.log("..", req.body)
    const data = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    }

    candidateService.register(data, (error, results) => {
        if(error){
            console.log(error);
            return res.status(400).send({success:0, data: "Bad request"});
        }

        return res.status(201).send({
            success:1,
            data: results
        });
    });
};

exports.login = (req , res, next) => {
    const data = {
       email: req.body.email,
       password: req.body.password
    }

    candidateService.login(data, (error, results) => {
        if(error){
            console.log(error);
            return res.status(400).send({success:0, data: "Bad request"});
        }

        return res.status(200).send({
            success:1,
            data: results
        });
    });
};

// exports.jobApply= (req , res, next) => {
//     const data = {
//         candidateID = req.params.canID,
//         JobID = req.params.jobId
//     }

//     candidateService.jobApply(data, (error, results) => {
//         if(error){
//             console.log(error);
//             return res.status(400).send({success:0, data: "Bad request"});
//         }

//         return res.status(200).send({
//             success:1,
//             data: results
//         });
//     });
// };