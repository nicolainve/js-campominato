var arrayRandom = [];

var size = 5;

while (arrayRandom.length < size) {
    var randomNumbers = getRandomNumber(1, 100);

    if (! arrayRandom.includes(randomNumbers)) {
        arrayRandom.push(randomNumbers);
    }
}

console.log(arrayRandom);


while (! isInArray(userNumber, arrayRandom)) {
    var userNumber = prompt('inserisci');
    console.log(isInArray(userNumber, arrayRandom));
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isInArray(val, array) {
    for (var i = 0; i < array.length; i++) { 
        if (array[i] == val ) {
            return true;
        } 
    } 
    return false;
}