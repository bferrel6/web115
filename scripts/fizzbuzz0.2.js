document.getElementById('send').onclick = function welcome() {
    
    /* create object for username*/
    const userName = {
        first: document.getElementById('firstName').value,
        middleInitial: document.getElementById('middleInitial').value,
        last: document.getElementById('lastName').value
    };

    /* show alert and update greeting*/
    if (userName.middleInitial !== '') {
        alert(`Welcome, ${userName.first} ${userName.middleInitial}. ${userName.last}!`)
        greetingBanner = `Welcome to <em>Veloniti</em>&trade;, ${userName.first} ${userName.middleInitial}. ${userName.last}!`
    } else {
        alert(`Welcome, ${userName.first} ${userName.last}!`)
        greetingBanner = `Welcome to <em>Veloniti</em>&trade;, ${userName.first} ${userName.last}!`
    };
    document.getElementById('greeting').innerHTML = greetingBanner; 

    /* run loop function */
    textFloodLoop();

    return false;
};

function textFloodLoop() { 

    /* define and insert new element*/
    const floodList = document.createElement('ol');
    floodList.classList.add('loopText');
    floodList.setAttribute('id', 'loopFlood');

    const banner = document.getElementById('greeting');
    banner.insertAdjacentElement('afterend', floodList);

    /* loop to fill element */
    let firstName = document.getElementById('firstName').value;
    let limit = prompt(`How many star systems have you visited, ${firstName}?`)
    let textFlood = null;
    for (let i = 0; i < limit; i++) {
        const floodItem = document.createElement('li');
        let oddity = (i % 2 == 0) ? 'the number is odd' : 'the number is even'
        textFlood = `&#9733; SAIL THE STARS &#9733; ${oddity}`
        floodItem.innerHTML = textFlood;
        floodList.append(floodItem);
    }; 
};

document.getElementById('clear').onclick = function resetPage() {

    /*delete loop text, clear form and reset header*/
    document.getElementById('greeting').innerHTML = 'Welcome, Future <em>Veloniti</em>&trade; Pilot'; 
    document.getElementById('loopFlood').remove();
    document.getElementById('user').reset();
    
    return false;
}