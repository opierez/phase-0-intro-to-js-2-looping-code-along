// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);


function writeCards(arr, eventName) {
    let customMessage = [];

    for (let i = 0; i < arr.length; i++) {
        customMessage.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
    }

    return customMessage;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(num) {
    let i = 0;
    while (i <= num) {
        console.log(num);
        num--;
    }

    return num;
}

console.log(countDown(10));