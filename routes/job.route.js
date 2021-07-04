const jobController = require("../controllers/job.controller");

var express = require("express");

var router = express.Router();

router.get("/", jobController.getallJob);
router.post("/", jobController.postJob);

module.exports = router;