
var path = require("path");


module.exports = function(app) {


  app.get("/api/tutors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.post("/api/tutors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};