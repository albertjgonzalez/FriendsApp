
var path = require("path");


module.exports = function(app) {


  app.get("/tutorSurvey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tutorSurvey.html"));
  });

  app.get("/studentSurvey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/studentSurvey.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};