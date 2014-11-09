var express = require('express');
var router = express.Router();

//linking collections and utils 
var utils = require('../../utils/utils')

var User = require('../../models/user');
var Bet = require('../../models/bet');
var Milestone = require('../../models/milestone');

// GET /milestones (TEMP FUNCTION FOR TESTING PURPOSES)
// Request parameters/body:
//     - none
// Response:
//     - success: true if all the milestones are successfully retrieved
//     - content: all milestone objects returned as a JSON
//     - err: on failure, an error message
router.get('/', function(req, res) {
	Milestone.find({}, function(err, doc){
		if (err){
			utils.sendErrResponse(res,500, "Cannot retrieve Milestones");
		}else{
			utils.sendSuccessResponse(res,doc)
		}
	})
});

/*// GET /milestones/:bet_id   //NOTE: duplication
// Request parameters/body: (note req.body for forms)
//     - bet_id: a String representation of the MongoDB _id of the bet
// Response:
//     - success: true if the milestones are successfully retrieved
//     - content: TBD
//     - err: on failure, an error message
router.get('/:bet_id', function(req, res) {
  res.send('respond with a resource');
});*/

// PUT /milestones/:milestone_id
// Request parameters:
//     - milestones_id: a String representation of the MongoDB _id of the milestone
// Response:
//     - success: true if the milestone with ID milestone_id is successfully edited
//     - content: the milestone object with ID milestone_id
//     - err: on failure, an error message
router.put('/:milestone_id', function(req, res) {
	var milestone_id = req.params.milestone_id;
	Milestone.findById(milestone_id, function(err, doc){
		if (err){
			utils.sendErrResponse(res,500, "Cannot retrieve Milestone with provided ID");
		}else{
			utils.sendSuccessResponse(res,doc)
		}
	})
});

module.exports = router;