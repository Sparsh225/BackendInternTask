const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema(
  {
    amount: {
      type: Number,
      require: true,
    },
    splitMethod: {
      type: String,
      enum: ["equal", "exact", "percentage"],
      require: true,
    },
    participants: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          require: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expenseSchema);
