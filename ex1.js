function Exercise1(tab) {
    HideAll();
    CleanResults('resultsEx1');
    document.getElementById(tab).classList.remove('hidden');
    let button = document.getElementById('btnEx1');
    button.addEventListener('click', () => {
        //1. get the min input
        let min = document.getElementById('minEx1').value;
        //2. get the max input
        let max = document.getElementById('maxEx1').value;
        //3. validate inputs
        let errorMessage = document.getElementById('errorEx1'); // gets the div display
        //3.1 If they're not numbers display error message
        if (!isNaN(min) && !isNaN(max)) {
            var minNum = Number(min);
            var maxNum = Number(max);
            //3.2 If min > max display error message
            if (minNum > maxNum) {
                errorMessage.innerHTML = "Min cannot be lesser than Max";
                return;
            }
        } else {
            errorMessage.innerHTML = "Inputs must be numbers";
            return;
        }
        //4. Display outputs
        //4.1 Li of inputs
        let result = "<ul>"
        result += "<li>Input: " + min + '</li>';
        result += "<li>Input: " + max + '</li>';
        //4.2 Li of All integers between
        for (let i = minNum; i <= maxNum; i++) {
            result += '<li>Output: ' + i + '</li>';
            // console.log("teste" + i);
        }
        result += '</ul>';
        document.getElementById('resultsEx1').innerHTML = result;
    });
}