const Expense = require("../models/Expense");
const { validateExpense } = require("../utils/validation");
const { generateBalanceSheet } = require("../utils/balanceSheet");

exports.addExpense = async (req, res) => {
  try {
    validateExpense(req.body);
    const expense = new Expense(req.boy);
    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      "participants User": req.params.userId,
    });
    res.status(201).json(expenses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getOverallExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(201).json(expenses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.downloadBalanceSheet = async (req, res) => {
  try {
    const expenses = await Expense.find();
    const balanceSheet = generateBalanceSheet(expenses);
    res.setHeader(
      "Content-disposition",
      "attachment; filename=balance-sheet.csv"
    );
    res.set("Content-Type", "text/csv");
    res.status(200).send(balanceSheet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
