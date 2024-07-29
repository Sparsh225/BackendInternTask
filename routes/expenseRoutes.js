const express = require("express");
const {
  addExpense,
  getUserExpenses,
  getOverallExpenses,
  downloadBalanceSheet,
} = require("../controllers/expenseController");

const router = express.Router();

router.post("/", addExpense);
router.get("/user/:userId", getUserExpenses);
router.get("/overall", getOverallExpenses);
router.get("/balance-sheet/download", downloadBalanceSheet);

module.exports = router;
