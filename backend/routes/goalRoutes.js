const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  udpateGoal,
  deleteGoal,
} = require("../controllers/goalController");
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)

router.route('/:id').put(protect, udpateGoal).delete(protect, deleteGoal)

// router.get("/", getGoals);

// router.post("/", setGoal);

// router.put("/:id", udpateGoal);

// router.delete("/:id", deleteGoal);

module.exports = router;
