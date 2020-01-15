var friends = require("./../data/friends");

var express = require("express");
var router = express.Router();

router.get("/api/friends", function(req, res) {
    // var friends = require("./../data/friends");
    res.json(friends);
});

router.post("/api/friends", function(req, res) {
    // var user = req.body.q1;
    console.log(friends);
    // console.log(req.body);
    console.log("POST");
    // friends.push(user);
    var currentDiff = 0;
    var bestMatchDiff = 40; //Maximum possible difference
    var bestMatch;

    for (var i = 0; i < friends.length; i++) {
        for (var j = 0; j < friends[i].scores.length; j++) {
            currentDiff += Math.abs(parseInt(req.body.scores[j]) - parseInt(friends[i].scores[j]));
        }

        if (currentDiff < bestMatchDiff) {
            bestMatchDiff = currentDiff;
            bestMatch = friends[i];
        } else {
            currentDiff = 0;
        }
    }

    res.json(bestMatch);

    friends.push(req.body);
});

module.exports = router;