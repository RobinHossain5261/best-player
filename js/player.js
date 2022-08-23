
const playerArray = [];

function displayPlayerName(playersList) {
    const tableBody = document.getElementById('selected-players');
    tableBody.innerText = '';
    for (let i = 0; i < playersList.length; i++) {
        const name = playerArray[i].playerList;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
        tableBody.appendChild(tr);
    }
    if (playersList.length > 5) {
        alert('Selected Five Players');
    }
    return;
}
function addToCart(element) {
    element.disabled = true;
    const playerName = element.parentNode.children[0].innerText;
    const playerObj = { playerList: playerName };
    playerArray.push(playerObj);
    displayPlayerName(playerArray);
}
