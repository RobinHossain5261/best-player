//common function

function updateBudgetCost(elementId) {
    const InputBudgetField = document.getElementById(elementId);
    const inputCostString = InputBudgetField.value;
    const inputCost = parseFloat(inputCostString);
    return inputCost;
}


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
    const managerCost = updateBudgetCost('manager-budget');
    const coachCost = updateBudgetCost('coach-budget');

    const totalExpensesElement = document.getElementById('total-expenses');
    const totalExpensesString = totalExpensesElement.innerText;
    const totalExpensesCost = parseFloat(totalExpensesString);

    const playerExpensesElement = document.getElementById('player-expenses');
    const previousPlayerExpensesString = playerExpensesElement.innerText;
    const previousPlayerExpenses = parseFloat(previousPlayerExpensesString);

    const totalCost = managerCost + coachCost + totalExpensesCost + previousPlayerExpenses;
    totalExpensesElement.innerText = totalCost;
})