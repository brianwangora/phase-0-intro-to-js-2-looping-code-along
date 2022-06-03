// Code your solutions in this file
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts
}
*/
/* 
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}
*/

const message =[];
function writeCards(name, event ) {
    for (let i=0; i<name.length; i++) {
        message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return message
} 


function countDown () {
    let countDown = 10    
    while (countDown>=0) {
    console.log(countDown--);
    }
}
