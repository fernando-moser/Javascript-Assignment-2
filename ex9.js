function Exercise9(tab) {
    Initialize(tab);
    document.getElementById('btnEx9').addEventListener('click', RunEx9);
}

function RunEx9() {
    //Clean all results
    CleanResults('outputEx9', 'inputEx9','errorEx9');
    //Gets input from user
    let inputStringValues = document.getElementById('valuesEx9').value;
    //Converts strings into an array
    let strings = Array.from(inputStringValues);
    //Checks wheter every item is 1 or 0
    let allBinaries = strings.every(item => {
        return item === '1' || item === '0';
    });
    //If not, display error and ends function
    if(!allBinaries) {
        SetHTMLElement('errorEx9', 'Only binary positive numbers (1 or 0)');
        return;
    }
    //Converts each string into a number
    let binaries = strings.map(item => {
        return Number(item);
    });
    //Creates a map of pow chars to display the result
    let map = new Map();
    map.set(0, '⁰');
    map.set(1, '¹');
    map.set(2, '²');
    map.set(3, '³');
    map.set(4, '⁴');
    map.set(5, '⁵');
    map.set(6, '⁶');
    map.set(7, '⁷');
    map.set(8, '⁸');
    map.set(9, '⁹');
    //Checks the lengh of the string             
    if (binaries.length > 10) {
        SetHTMLElement('errorEx9', `Maximum 10 numbers accepted, typed: ${binaries.length}`);
        return;
    }
    //Variables used in the calculus
    let sum = 0, temp = 0;
    //Control variable gets the last item to start calculating
    let control = binaries.length - 1;
    let stringResult = '', stringSum = '';
    //Calculates the decimal equivalent to binary
    binaries.forEach((item,i) => {
        //If number is 1 calculates
        if (item === 1) {
            //Control - i inverts the order of calculus, it goes from top exp to bottom
            temp = Math.pow(2, control - i);
            sum += temp;
            stringResult += `2 ${map.get(control - i)} + `;
            stringSum += `${temp} + `;
        }
    });
    //Cuts the ' + ' out from the resulting strings 
    stringResult = stringResult.substr(0, (stringResult.length - 3));
    stringSum = stringSum.substr(0, (stringSum.length - 3));
    //Displays the result
    SetHTMLElement('inputEx9',BuildList(inputStringValues));
    SetHTMLElement('outputEx9', BuildList(`${stringResult} = ${stringSum} = ${sum}`));
}