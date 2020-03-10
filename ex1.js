function Exercise1(tab) {
    Initialize(tab);
    //Adds an event listener in the button and Runs the logic
    document.getElementById('btnEx1').addEventListener('click', RunEx1);
}
//ftn that runs the logic
function RunEx1() {
    //Clears all previous results
    CleanResults('inputEx1','resultsEx1', 'errorEx1');
    //Gets input from user
    let min = document.getElementById('minEx1').value;
    let max = document.getElementById('maxEx1').value;
    //Validates if all integers
    if (!isInteger(min) || !isInteger(max)) {
        SetHTMLElement('errorEx1','Inputs must be numbers');
        return;
    }
    //Converts to numbers
    let minNum = Number(min);
    let maxNum = Number(max);
    //Validates min and max are in correct order
    if (minNum > maxNum) {
        SetHTMLElement('errorEx1','Min cannot be lesser than Max');
        return;
    }
    //Displays outputs
    //Inputs
    SetHTMLElement('inputEx1',BuildList(`Min: ${minNum}`,`Max: ${maxNum}`));
    //Outputs
    let result = [];
    for (let i = minNum; i <= maxNum; i++) {
        result.push(i);
    }
    SetHTMLElement('resultsEx1',BuildListArray(result));
}