function Exercise2(tab) {
    HideAll();
    CleanResults('inputEx2', 'outputEx2');
    document.getElementById(tab).classList.remove('hidden');
    document.getElementById('btnEx2').addEventListener('click', () => {
        let inputString = document.getElementById('inputEx2').value;
        let inputStringArray = inputString.split(',');
        let inputNumbersArray = [];
        
        inputStringArray.forEach(item => {
            if (!isInteger(item)) { // Validation
                SetHTMLElement('errorEx2', "All inputs must be integer numbers"); // Displays error message
                return;
            } else {
                inputNumbersArray.push(Number(item)); //Convertion
                SetHTMLElement('errorEx2', ''); // Cleans error message
            }

        });

        let total = 0, average, smallest = inputNumbersArray[0], largest = inputNumbersArray[0];
        for (let i = 0; i < inputNumbersArray.length; i++) {
            let number = inputNumbersArray[i];
            total += number;
            if (smallest > number) {
                smallest = number;
            }
            if (largest < number) {
                largest = number;
            }
        }
        average = Math.round(total / inputNumbersArray.length);
        SetHTMLElement('inputEx2', BuildList(inputString));
        SetHTMLElement('outputEx2',BuildList(`Total: ${total}, Average: ${average}, Smallest: ${smallest} Largest: ${largest}`));
    });
}