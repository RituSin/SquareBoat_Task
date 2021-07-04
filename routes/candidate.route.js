const candidateController = require("../controllers/candidate.controller");

var express = require("express");

var router = express.Router();

router.post("/register", candidateController.register);
router.post("/login", candidateController.login);
//router.post("/:canID/job/:jobId", candidateController.jobApply)

module.exports = router;