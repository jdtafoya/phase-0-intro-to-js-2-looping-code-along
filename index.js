// Code your solutions in this file
const names = []
const messages = []
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    };
    return messages;
}

function countDown(i) {
    while (i > -1) {
        console.log(i);
        i--;
    }
}

