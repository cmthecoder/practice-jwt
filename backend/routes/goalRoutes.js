const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  udpateGoal,
  deleteGoal,
} = require("../controllers/goalController");

router.route('/').get(getGoals).post(setGoal)

router.route('/:id').put(udpateGoal).delete(deleteGoal)

// router.get("/", getGoals);

// router.post("/", setGoal);

// router.put("/:id", udpateGoal);

// router.delete("/:id", deleteGoal);

module.exports = router;
