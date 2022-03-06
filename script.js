let num = prompt("Please enter a number: ")
const display = document.querySelector('.evens');
const p2 = document.createElement(`p`);



for (i = 0; i <= `${num}`; i++){
    if (i % 2 == 0){
        console.log(i);
        display.append(p2);
        p2.innerHTML = `${i}`;
    }
}