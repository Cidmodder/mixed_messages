let first = ['you enter a tavern', 'you enter a dungeon', 'you enter a castle'];
let second = ['you see an old friend off to one side', 'you smell something foul coming from nearby', 'you see someone doing their best to sneak by'];
let third = ['do you speak to your friend or continue on?', 'do you find the source of the smell or get as far away from it as you can?', 'do you follow them to see what they plan or do you ignore them?'];
let button = document.getElementById('generate');

let num1 = Math.floor(Math.random()*first.length);
let num2 = Math.floor(Math.random()*second.length);

function setFirst(num1){
    num1 = Math.floor(Math.random()*first.length);
    document.getElementById('first').innerHTML = first[num1];
    setSecond(num2);
}

function setSecond(num2){
    num2 = Math.floor(Math.random()*second.length);
    document.getElementById('second').innerHTML = second[num2];
    setThird(num2);
}

//for now, I need lists 2 and 3 to use the same index so they match their text since they are linked. May change later.
function setThird(num2){
    document.getElementById('third').innerHTML = third[num2];
}

button.onclick = setFirst;