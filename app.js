const express = require("express");

const app  = express();
var bodyParser = require('body-parser').json();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log("Server is started!!");
});

const recuiterRoutes = require("./routes/recuiter.route");
const candidateRoutes = require("./routes/candidate.route");
const jobRoutes = require("./routes/job.route");

app.use("/recuiters",bodyParser, recuiterRoutes);
app.use("/candidates",bodyParser,candidateRoutes);
app.use("/jobs",bodyParser,jobRoutes);

