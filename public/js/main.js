const cardContainer = document.querySelector('.card-container');

fetch('/icecreams')
.then(myData => myData.text())
.then(jsonData => showIcecreams(jsonData));

function showIcecreams(icecreams) {
    let htmlCode = '';
    for (let i = 0; i < icecreams.length; i++) {
        const icecream = icecreams[i];
        htmlCode += icecreamCards(icecream);
    }
    cardContainer.innerHTML += htmlCode;
}

function icecreamCards(icecream) {
    const card = `
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">${icecream.icecream}</h4>
            <p class="card-text">${icecream.description}</p>
            <p class="card-text">${icecream.price}</p>
        </div>
        </div>
    `
    return card;
}