function Exercise3(tab) {
    HideAll();
    CleanResults('inputEx3', 'outputEx3');
    document.getElementById(tab).classList.remove('hidden');
    document.getElementById('btnEx3').addEventListener('click', () => {

        let inputString = document.getElementById('valuesEx3').value;
        let keyInputString = document.getElementById('keyEx3').value;

        //2. Split the values
        let inputStringArray = inputString.split(',');

        //3. Validate if input is not a Number and Convert them to numbers
        //3.1 Validate key
        let key = 0;
        if (!isInteger(keyInputString)) {
            SetHTMLElement('errorEx3', 'key must be integer number');
            return;
        } else {
            key = Number(keyInputString);
            CleanResults('errorEx3');
        }
        //3.2 Validate numbers
        let inputNumbersArray = [];
        for (let i = 0; i < inputStringArray.length; i++) {
            let item = inputStringArray[i];

            if (!isInteger(item)) { // Validation
                SetHTMLElement('errorEx3', "All inputs must be integer numbers");
                CleanResults('inputEx3', 'outputEx3');
                return;
            } else {
                inputNumbersArray.push(Number(item)); //Convertion
                CleanResults('errorEx3');
            }
        }

        // 4 Count how many times the key apperas
        let howManyTimesTheKeyAppears = 0;

        for (let i = 0; i < inputNumbersArray.length; i++) {

            if (key == inputNumbersArray[i]) {
                howManyTimesTheKeyAppears++;
            }
        }
        //8. Display the results
        document.getElementById('inputEx3').innerHTML = BuildList('Nums: ' + inputString, 'Key: ' + keyInputString);

        document.getElementById('outputEx3').innerHTML = BuildList(howManyTimesTheKeyAppears);
    });
}