var bombNumber = 16;

var nMax;

var nMin = 1;

var counter = 0;

while ((isNaN(difficulty) || difficulty < 0 || difficulty > 2)) {
    var difficulty = parseInt( prompt('Difficoltà') );
}

switch (difficulty) {
    case 0:
        nMax = 100;
        break;
    case 1:
        nMax = 80;
        break;
    case 2:
        nMax = 50;
        break;
}


var bombList = pushArray(bombNumber, nMax);

console.log(bombList);

var userList = [];

for (var i = 0; i < (nMax - bombNumber); i++) {
    while (isNaN(userNumber) || userNumber < nMin || userNumber > nMax || userList.includes(userNumber)) {
        var userNumber = parseInt( prompt('Inserisci un numero, VALIDO, compreso tra ' + nMin + ' e ' + nMax) );
    }

    if (! bombList.includes(userNumber) ) {
        alert('Continua');
        userList.push(userNumber);
        counter++
    } else {
        alert('Hai perso');
        break;
    }

    console.log(userList);

    console.log(counter);
}

if ((nMax - bombNumber) == counter) {
    alert('Hai vinto')
}



function pushArray(num, max) {
    var bombList = [];
    while (bombList.length < num) {

        var numero = Math.round ( Math.random() * max ) + 1;

        if (! bombList.includes(numero)) {
            bombList.push(numero);
        }
    }

    return bombList
}