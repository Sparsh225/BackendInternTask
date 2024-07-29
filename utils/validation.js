exports.validateExpense = (expense) => {
  if (!expense.amount || typeof expense.amount !== "number") {
    throw new Error("Invalid expense amount");
  }
  if (!["equal", "exact", "percentage"].includes(expense.splitMethod)) {
    throw new Error("Invaild spilt Method");
  }
  if (
    !Array.isArray(expense.participants) ||
    expense.participants.length === 0
  ) {
    throw new Error("Participants are Required");
  }
  if (expense.splitMethod === "percentage") {
    const totalPercentage = expense.participants.reduce(
      (sum, participant) => sum + participant.percentage,
      0
    );
    if (totalPercentage !== 100) {
      throw new Error("Total percentage must be 100%");
    }
  }
};
