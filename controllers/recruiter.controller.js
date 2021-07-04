const recruiterService = require("../services/recuiter.service");

exports.register =(req , res, next) => {
    console.log(req.body)
    console.log(req.data)
    const data = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    }

    recruiterService.register(data, (error, results) => {
        
        if(error){
            console.log(error);
            return res.status(400).send({success:0, data: data});
        }

        return res.status(201).send({
            success:1,
            data: results
        });
    });
};


exports.login =(req , res, next) => {
    const data = {
        email: req.body.email,
        password: req.body.password
    }

    recruiterService.login(data, (error, results) => {
        
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

exports.viewCandidate = (req , res, next) => {
    const data = {
        id: req.params.id
    }

    recruiterService.login(data, (error, results) => {        
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