function Exercise8(tab) {
    Initialize(tab);
    document.getElementById('btnEx8').addEventListener('click', RunEx8);
}

function RunEx8() {
    CleanResults('inputEx8', 'outputEx8', 'errorEx8');
    //Gets input from user
    let bars = document.getElementById('valuesEx8').value;
    //Validates input
    if (!isPositiveInteger(bars)) {
        SetHTMLElement('errorEx8', 'Input must be a positive integer number');
        return;
    }
    //Converts to number
    let numBars = Number(bars);
    //How many boxes are needed
    let numBoxes = Math.floor(numBars / 24);
    //How many single bars remain after 2
    let numSingles = numBars % 24;
    //Finds cost of boxes
    let boxesCost = numBoxes * 32;
    //Finds cost of singles
    let singlesCost = numSingles * 1.75;
    //Display results
    //Gets a formater to display cost as currency
    let formater = GetFormater();
    //Displays inputs
    SetHTMLElement('inputEx8',BuildList(numBars));
    //Displays outputs
    SetHTMLElement('outputEx8',BuildList(`Number of bars: ${numBars}`,
    `Number of Boxes: ${numBoxes}`,
    `Number of Singles: ${numSingles}`,
    `Cost of Boxes ${formater.format(boxesCost)}`, 
    `Cost of Singles ${formater.format(singlesCost)}`,
    `Total Cost: ${formater.format(boxesCost + singlesCost)}`));

}