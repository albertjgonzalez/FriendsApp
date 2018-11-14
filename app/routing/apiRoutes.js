var studentData = require("../data/student");
var tutorData = require("../data/tutor");
var path = require("path");



module.exports = function(app) {

  app.get("/api/tutors", function(req, res) {
    res.sendFile(path.join(__dirname, "data/friendsApp.js"));
  });

  app.post("/api/student", function(req, res) {
    studentData.push(req.body)
    res.status(200).send(tutorData[1])
  });

  app.post("/api/tutor", function(req, res) {
    tutorData.push(req.body)
    res.status(200).send(req.body)
  });
};