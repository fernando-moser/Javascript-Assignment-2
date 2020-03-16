function Exercise2(tab) {
    Initialize(tab);
    //Add a event listener in the button and
    document.getElementById('btnEx2').addEventListener('click', RunEx2);
}
//Ftn that runs the logic
function RunEx2() {
    //Clears all previous results
    CleanResults('inputEx2', 'outputEx2', 'errorEx2');
    //Gets input from user
    let inputString = document.getElementById('valuesEx2').value;
    //Splits string
    let inputStringArray = inputString.split(',');
    //Attempts to convert to integers
    let isAllIntegers = inputStringArray.every(item => {
        return isInteger(item) || isFloat(item);
    });
    //Checks if all integers
    if (!isAllIntegers) {
        SetHTMLElement('errorEx2', "All inputs must be numbers");
        return;
    }
    // Converts to Number
    let inputNumbersArray = inputStringArray.map(item => {
        return Number(item);
    });
    // Sums up all numbers
    let sum = inputNumbersArray.reduce((total, value) => {
        return total + value;
    });
    // Sorts the array
    inputNumbersArray = inputNumbersArray.sort((a, b) => {
        return a - b;
    });
    //Variables for results
    let average = (sum / inputNumbersArray.length).toFixed(2);
    let smallest = inputNumbersArray[0];
    let Largest = inputNumbersArray[inputNumbersArray.length - 1];
    //Displays
    SetHTMLElement('inputEx2', BuildList(inputString));
    SetHTMLElement('outputEx2', BuildList(`Total: ${sum}`,`Average: ${average}`,`Smallest: ${smallest}`,`Largest: ${Largest}`));
}