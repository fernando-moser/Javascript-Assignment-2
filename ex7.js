function Exercise7(tab) {
    Initialize(tab);

    document.getElementById('btnEx7').addEventListener('click', RunEx7);

}

function RunEx7() {
    //1. Get the input from user
    let inputStringValues = document.getElementById('valuesEx7').value;
    let num = Number(inputStringValues);
    
    let cost = 5;
    if(num > 100 && num <= 1000){
        cost = 4;
    } else if (num > 1000) {
        cost = 3;
    }
    let baseCost = num * cost;
    let tax = baseCost * 0.15;
    let total = Math.round(baseCost + tax);

    //Display Input
    SetHTMLElement('inputEx7',BuildList(inputStringValues));
    SetHTMLElement('outputEx7',BuildList(`Base Cost: ${baseCost}, Tax: ${tax}, Total Cost: ${total}`));

    
}