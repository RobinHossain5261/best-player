
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
    if (playersList.length <= 5) {
        console.log('working')
    }
    else {
        alert('Selected Five Players')
    }

}
function addToCart(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerObj = { playerList: playerName };
    playerArray.push(playerObj);

    displayPlayerName(playerArray);

}


//disabled button
const button = document.querySelector('#added-btn-list');
const disableButton = () => {
    button.disabled = true;
};
button.addEventListener('click', disableButton);

const button1 = document.querySelector('#added-btn-list1');
const disableButton1 = () => {
    button1.disabled = true;
};
button1.addEventListener('click', disableButton1);

const button2 = document.querySelector('#added-btn-list2');
const disableButton2 = () => {
    button2.disabled = true;
};
button2.addEventListener('click', disableButton2);

const button3 = document.querySelector('#added-btn-list3');
const disableButton3 = () => {
    button3.disabled = true;
};
button3.addEventListener('click', disableButton3);

const button4 = document.querySelector('#added-btn-list4');
const disableButton4 = () => {
    button4.disabled = true;
};
button4.addEventListener('click', disableButton4);

const button5 = document.querySelector('#added-btn-list5');
const disableButton5 = () => {
    button5.disabled = true;
};
button5.addEventListener('click', disableButton5);


