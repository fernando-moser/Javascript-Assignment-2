function Exercise4(tab) {
    Initialize(tab);
    //Adds a event listener in the button
    document.getElementById('btnEx4').addEventListener('click', RunEx4);
    
}

function RunEx4() {
    //Clears previous results
    CleanResults('inputEx4','outputEx4','errorEx4');
    //Gets input from user
    let inputString = document.getElementById('valuesEx4').value;
    //Validates input
    if (!isPositiveInteger(inputString)) {
        SetHTMLElement('errorEx4', 'Input must be a positive integer number');
        return;
    }
    //Converts into integer
    let inputNumber = Number(inputString);
    //Displays input values
    SetHTMLElement('inputEx4',BuildList(`Num: ${inputString}`));
    //Displays output values by adding *
    let output = "";
    for (let i = 0; i < inputNumber; i++) {
        output += '*';
    }
    SetHTMLElement('outputEx4',BuildList(output));
}