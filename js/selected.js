function addPlayerName(elementId) {
    const placeUl = document.getElementById(elementId);
    const li = document.createElement('li');
    li.innerText = 'Lionel Messi';
    placeUl.appendChild(li);
}


document.getElementById('added-btn-list').addEventListener('click', function () {
    addPlayerName('places-list');


})

const button = document.querySelector('#added-btn-list');

const disableButton = () => {

    button.disabled = true;

};

button.addEventListener('click', disableButton);