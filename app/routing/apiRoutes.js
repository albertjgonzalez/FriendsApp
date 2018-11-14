var studentData = require("../data/student");
var tutorData = require("../data/tutor");
var path = require("path");
var suggestedTutors = [];




module.exports = function(app) {

  app.get("/api/tutors", function(req, res) {
    res.sendFile(path.join(__dirname, "data/friendsApp.js"));
  });

  app.post("/api/student", function(req, res) {
    studentData.push(req.body)
    
    var answers = req.body.answers;
    
    var mostDifferentAmount = 0;
    for(var i = 0; i<tutorData.length; i++){
      var totalDifferenceArray = [];
      var totalDifference = 0;

      for(var j = 0; j<tutorData[i].answers.length; j++){
        var difference = tutorData[i].answers[j]-answers[j];
        totalDifferenceArray.push(difference);
      }
      for(var k = 0;k < totalDifferenceArray.length ;k++){
        totalDifference += totalDifferenceArray[k]
      } 
      if(totalDifference >= mostDifferentAmount){
        mostDifferentTutor = tutorData[i];
        suggestedTutors.push(tutorData[i])
        mostDifferentAmount = totalDifference;
        // console.log(mostDifferentTutor)
        // console.log(mostDifferentAmount)
      }
    }
    res.status(200).send(suggestedTutors);
    suggestedTutors = [];
  });

  app.post("/api/tutor", function(req, res) {
    tutorData.push(req.body)
    res.status(200).send(req.body)
  });
};