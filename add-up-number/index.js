// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. 
// Add up all the numbers from 1 to the number you passed to 
// the function. For example, if the input is 4 then your function 
// should return 10 because 1 + 2 + 3 + 4 = 10.
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
var input = document.querySelector('.js-input');
var output = document.querySelector('.js-result');
var butn = document.querySelector('.js-button');
var add_up = function (val) {
    var num = 0;
    for (var i = 1; i <= +val; i++) {
        num += i;
    }
    return num;
};
function result() {
    var inputValue = input.value;
    output.textContent = String(add_up(inputValue));
}
butn === null || butn === void 0 ? void 0 : butn.addEventListener('click', result);
