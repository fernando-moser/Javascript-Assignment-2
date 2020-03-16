function Exercise5(tab) {
    //Hides all other tabs and shows this one
    Initialize(tab);
    //Adds a event listener in the button
    document.getElementById('btnEx5').addEventListener('click', RunEx5);

}

function RunEx5() {
    //Clears previous results
    CleanResults('inputEx5', 'outputEx5','errorEx5');
    //Gets input from user
    let inputStringValues = document.getElementById('valuesEx5').value;
    let inputStringMax = document.getElementById('maxEx5').value;
    //Validates input
    if (!isPositiveInteger(inputStringValues) || !isPositiveInteger(inputStringMax)) {
        SetHTMLElement('errorEx5', 'All inputs must be positive integer numbers');
        return;
    }
    //Converts into integer
    let inputNumberValues = Number(inputStringValues);
    let inputNumberMax = Number(inputStringMax);
    //Calculates how many whole lines to write
    let outputHowManyLines = Math.floor(inputNumberValues / inputNumberMax);
    //Calculates how many partial chars to write
    let outputHowManyLeftOvers = inputNumberValues % inputNumberMax;
    //Writes whole lines
    //Variable to store a string for each whole line
    let arrayLines = [];
    let output = "";
    //Iterates over the whole lines
    for (let i = 0; i < outputHowManyLines; i++) {
        //For each line, writes *
        for (let i = 0; i < inputNumberMax; i++) {
            output += '*';
        }
        //Adds the line into the array
        arrayLines.push(output);
        //Reinitiates the output
        output = "";
    }
    //Checks if there's leftovers to write
    if (outputHowManyLeftOvers != 0) {
        //Writes the leftover *
        for (let i = 1; i <= outputHowManyLeftOvers; i++) {
            output += '*';
        }
        //Adds the leftovers into the array
        arrayLines.push(output);
    }
    //Displays results
    SetHTMLElement('inputEx5',BuildList(`Values: ${inputStringValues}`,`Max: ${inputStringMax}`));
    SetHTMLElement('outputEx5',BuildListArray(arrayLines));
}
