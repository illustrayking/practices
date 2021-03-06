// Add up the Numbers from a Single Number

// Create a function that takes a number as an argument. 
// Add up all the numbers from 1 to the number you passed to 
// the function. For example, if the input is 4 then your function 
// should return 10 because 1 + 2 + 3 + 4 = 10.

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

const input = document.querySelector('.js-input') as HTMLInputElement;
const output = document.querySelector('.js-result') as HTMLDivElement;
const butn = document.querySelector('.js-button');
const add_up = (val:string):number => {
    let num = 0;

    for(let i = 1; i <= +val; i++) {
        num += i;
    }
    return num;
}

function result():void {
    let inputValue = input.value;
    output.textContent = String(add_up(inputValue));
}
butn?.addEventListener('click', result);