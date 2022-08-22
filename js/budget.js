
document.getElementById('player-budget-btn').addEventListener('click', function () {
    const perPlayerInputField = document.getElementById('per-player-budget');
    const perPlayerCostString = perPlayerInputField.value;
    const perPlayerCost = parseFloat(perPlayerCostString);

    const selectedPlayerElement = document.getElementById('selected-players');

    const selectedPlayerNumber = selectedPlayerElement.children.length;

    const selectedPlayerCost = perPlayerCost * selectedPlayerNumber;

    const playerExpensesElement = document.getElementById('player-expenses');
    const previousPlayerExpensesString = playerExpensesElement.innerText;
    const previousPlayerExpenses = parseFloat(previousPlayerExpensesString);
    const currentPlayerExpensesCost = previousPlayerExpenses + selectedPlayerCost;
    playerExpensesElement.innerText = currentPlayerExpensesCost;

    perPlayerInputField.value = '';

})

document.getElementById('all-budget-btn').addEventListener('click', function () {
    const managerInputField = document.getElementById('manager-budget');
    const managerCostString = managerInputField.value;
    const managerCost = parseFloat(managerCostString);

    const coachInputField = document.getElementById('coach-budget');
    const coachCostString = coachInputField.value;
    const coachCost = parseFloat(coachCostString);

    const totalExpensesElement = document.getElementById('total-expenses');
    const totalExpensesString = totalExpensesElement.innerText;
    const totalExpensesCost = parseFloat(totalExpensesString);

    const playerExpensesElement = document.getElementById('player-expenses');
    const previousPlayerExpensesString = playerExpensesElement.innerText;
    const previousPlayerExpenses = parseFloat(previousPlayerExpensesString);

    const totalCost = managerCost + coachCost + totalExpensesCost + previousPlayerExpenses;
    totalExpensesElement.innerText = totalCost;
})