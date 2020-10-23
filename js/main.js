var arrayRandom = [];

var size = 5;

while (arrayRandom.length < size) {
    var randomNumbers = getRandonNumber(1, 100);

    if (! arrayRandom.includes(randomNumbers)) {
        arrayRandom.push(randomNumbers);
    }
}

console.log(arrayRandom);

function getRandonNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}