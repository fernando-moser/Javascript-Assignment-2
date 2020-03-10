function Exercise5(tab) {
    HideAll();
    CleanResults('inputEx5', 'outputEx5');
    document.getElementById(tab).classList.remove('hidden');
    document.getElementById('btnEx5').addEventListener('click', () => {

        //1. Get the input from user
        let inputStringValues = document.getElementById('valuesEx5').value;
        let inputStringMax = document.getElementById('maxEx5').value;

        //2. Validate if input is not a Number and Convert them to numbers
        //2.1 Validate key
        let inputNumberValues = 0, inputNumberMax;
        if (!isInteger(inputStringValues) || !isInteger(inputStringMax)) {
            DisplayHTMLMessage('errorEx5', 'Numbers must be integers');
            return;
        } else {
            inputNumberValues = Number(inputStringValues);
            inputNumberMax = Number(inputStringMax);
        }

        //3Display results
        //3.1 Display inputs
        // document.getElementById('inputEx5').innerHTML = BuildElementResult('Values: ' + inputStringValues, 'Max: ' + inputStringMax);
        SetHTMLElement('inputEx5',BuildList(`Values: ${inputStringValues}`,`Max: ${inputStringMax}`));
        
        //3.2 Generate the *
        //3.2.1 Get how many whole lines to write
        let outputHowManyLines = Math.floor(inputNumberValues / inputNumberMax);
        //3.2.2 Get how many lefts * to write
        let outputHowManyLeftOvers = inputNumberValues % inputNumberMax;
        //3.2.1.1 Write whole lines
        let arrayLines = [];
        let output = "";
        for (let i = 0; i < outputHowManyLines; i++) {
            for (let i = 0; i < inputNumberMax; i++) {
                output += '*';
            }
            arrayLines.push(output);
            output = "";
        }
        //3.2.1.2 Write leftover lines
        if (outputHowManyLeftOvers != 0) {
            for (let i = 1; i <= outputHowManyLeftOvers; i++) {
                output += '*';
            }
            arrayLines.push(output);
        }
        // document.getElementById('output').innerHTML = BuildElementResultArray(arrayLines);
        SetHTMLElement('outputEx5',BuildListArray(arrayLines));
    });

}
