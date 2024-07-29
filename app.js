const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("hello from world");
});
app.use("/api/users", userRoutes);
app.use("/api/expense", expenseRoutes);

module.exports = app;
