function Exercise4(tab) {
    HideAll();
    CleanResults('inputEx4','outputEx4');
    document.getElementById(tab).classList.remove('hidden');
    document.getElementById('btnEx4').addEventListener('click', () => {
        let inputString = document.getElementById('valuesEx4').value;
        let inputNumber = 0;
        if (!isInteger(inputString)) {
            DisplayHTMLMessage('errorEx4', 'Number must be an integer number');
            CleanResults('inputEx4', 'outputEx4');
            return;
        } else {
            inputNumber = Number(inputString);
            CleanResults('errorEx4');
        }
        SetHTMLElement('inputEx4',BuildList(`Num: ${inputString}`));
        let output = "";
        for (let i = 0; i < inputNumber; i++) {
            output += '*';
        }
        SetHTMLElement('outputEx4',BuildList(output));
    });

}