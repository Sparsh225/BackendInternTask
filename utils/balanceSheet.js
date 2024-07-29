exports.generateBalanceSheet = (expenses) => {
  let csv = "User,Amount\n";
  let balanceSheet = {};

  expenses.forEach((expense) => {
    expense.participants.forEach((participant) => {
      if (!balanceSheet[participant.user]) {
        balanceSheet[participant.user] = 0;
      }
      balanceSheet[participant.user] += participant.amount;
    });
  });

  for (let user in balanceSheet) {
    csv += `${user},${balanceSheet[user]}\n`;
  }

  return csv;
};
