function Exercise3(tab) {
    HideAll();
    CleanResults('inputEx3', 'outputEx3','errorEx3');
    document.getElementById(tab).classList.remove('hidden');
    document.getElementById('btnEx3').addEventListener('click', RunEx3);
}

function RunEx3() {
    let inputString = document.getElementById('valuesEx3').value;
    let keyInputString = document.getElementById('keyEx3').value;
    //2. Split the values
    let inputStringArray = inputString.split(',');
    //3. Validate if input is not a Number and Convert them to numbers
    //3.1 Validate key
    if (!isInteger(keyInputString)) {
        SetHTMLElement('errorEx3', 'key must be integer number');
        return;
    }
    let key = Number(keyInputString);
    //3.2 Validate numbers
    let isAllNumbers = inputStringArray.every(item => {
        return isInteger(item);
    });
    if(!isAllNumbers) {
        SetHTMLElement('errorEx3', 'All inputs must be integer numbers');
        return;
    }
    let inputNumbersArray = inputStringArray.map(item => {
        return Number(item);
    });
    // 4 Count how many times the key apperas
    let howManyTimesTheKeyAppears = 0;
    inputNumbersArray.forEach(item => {
        if (key === item) {
            howManyTimesTheKeyAppears++;
        }
    });
    //8. Display the results
    SetHTMLElement('inputEx3',BuildList(`Nums: ${inputString}`,`Key: ${keyInputString}`));
    SetHTMLElement('outputEx3',BuildList(howManyTimesTheKeyAppears));
}