const recruiterController = require("../controllers/recruiter.controller");

var express = require("express");

var router = express.Router();

router.post("/register", recruiterController.register);
router.post("/login", recruiterController.login);
router.get("/job/view-candidates/:id", recruiterController.viewCandidate);


module.exports = router;