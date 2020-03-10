function Exercise7(tab) {
    Initialize(tab);
    document.getElementById('btnEx7').addEventListener('click', RunEx7);
}

function RunEx7() {
    //Gets input from user
    let inputStringValues = document.getElementById('valuesEx7').value;
    //Validates inputs
    if(!isInteger(inputStringValues)) {
        SetHTMLElement('errorEx7', 'Numbers must be integers');
        return;
    }
    //Converts to number
    let num = Number(inputStringValues);
    //Assesses which cost to apply
    let cost = 5;
    if(num > 100 && num <= 1000){
        cost = 4;
    } else if (num > 1000) {
        cost = 3;
    }
    //Currency formater
    const formater = GetFormater();
    //Variables for displaying
    let baseCost = num * cost;
    let tax = baseCost * 0.15;
    let total = Math.round(baseCost + tax);
    //Display outputs
    SetHTMLElement('inputEx7',BuildList(inputStringValues));
    SetHTMLElement('outputEx7',BuildList(`Base Cost: ${formater.format(baseCost)}, Tax: ${formater.format(tax)}, Total Cost: ${formater.format(total)}`));
}