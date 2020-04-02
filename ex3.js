function Exercise3(tab) {
    Initialize(tab);
    //Adds a event listener in the button
    document.getElementById('btnEx3').addEventListener('click', RunEx3);
}
//ftn that runs the exercise
function RunEx3() {
    //Clears all sections
    CleanResults('inputEx3', 'outputEx3','errorEx3');
    //Gets input from user
    let inputString = document.getElementById('valuesEx3').value;
    let keyInputString = document.getElementById('keyEx3').value;
    //Splits values into an array
    let inputStringArray = inputString.split(',');
    //Validates key value
    if (!isInteger(keyInputString) && !isFloat(keyInputString)) {
        SetHTMLElement('errorEx3', 'key must be a number');
        return;
    }
    //Converts key to integer
    let key = Number(keyInputString);
    //Validates values inputs
    let isAllNumbers = inputStringArray.every(item => {
        return isInteger(item) || isFloat(item);
    });
    //If they're not numbers, displays msg
    if(!isAllNumbers) {
        SetHTMLElement('errorEx3', 'All inputs must be numbers');
        return;
    }
    //Converts values into numbers
    let inputNumbersArray = inputStringArray.map(item => {
        return Number(item);
    });
    //Counts key values
    let howManyTimesTheKeyAppears = 0;
    let keyNotFound = '';
    inputNumbersArray.forEach(item => {
        if (key === item) {
            howManyTimesTheKeyAppears++;
        }
    });
    //Displays the results
    SetHTMLElement('inputEx3',BuildList(`Nums: ${inputString}`,`Key: ${keyInputString}`));
    SetHTMLElement('outputEx3',BuildList(howManyTimesTheKeyAppears));
}