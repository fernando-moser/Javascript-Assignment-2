function Exercise6(tab) {
    //Hides all other tabs and shows this one
    Initialize(tab);
    //Adds a event listener in the button
    document.getElementById('btnEx6').addEventListener('click', RunEx6);
}

function RunEx6() {
    //Clears previous results
    CleanResults('inputEx6','outputEx6','errorEx6');
    //Gets input from user
    let inputStringValues = document.getElementById('valuesEx6').value;
    //Converts all letters into an array
    let [...letters] = inputStringValues.toLowerCase();
    //Builds another array replacing vowels for *
    let output = letters.map(element => {
        if(element === 'a' || element === 'e' || element === 'i' ||  element === 'o' || element === 'u' ) {
            return '*';
        } else {
            return element;
        }
    });
    //Displays results
    SetHTMLElement('inputEx6',BuildList(inputStringValues));
    SetHTMLElement('outputEx6',BuildList(output.toString().replace(/,/g,'')));

    
}