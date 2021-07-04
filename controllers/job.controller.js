const jobService = require("../services/job.service");

exports.getallJob =(req , res, next) => {
    let profile = req.query.title;
    let skills =  req.query.skills;
    let recruiter = req.query.recruiter;
   
    const data = {
        profile:profile,
        description: skills,
        recruiter: recruiter
    }
    
    jobService.getallJob(data, (error, results) => {
        
        if(error){
            console.log(error);
            return res.status(400).send({success:0, data: data});
        }

        return res.status(200).send({
            success:1,
            data: results
        });
    });
};

exports.postJob =(req , res, next) => {
    console.log(req.body)
    const data = {
        company: req.body.company,
        profile: req.body.profile,
        experience: req.body.experience,
        location: req.body.location,
        skills: req.body.skills,
        requirement: req.body.requirement
    }

    jobService.postJob(data, (error, results) => {
        
        if(error){
            console.log(error);
            return res.status(400).send({success:0, data: data});
        }

        return res.status(200).send({
            success:1,
            data: results
        });
    });
};
