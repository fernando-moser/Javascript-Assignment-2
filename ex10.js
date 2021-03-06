function Exercise10(tab) {
    Initialize(tab);
    document.getElementById('btnEx10').addEventListener('click', RunEx10);
}

function RunEx10() {
    //Clean all results
    CleanResults('outputEx10', 'inputEx10', 'errorEx10');
    //Hides all tringles images
    HideTriangleImages();
    //Gets input from user
    let angle1 = document.getElementById('value1Ex10').value;
    let angle2 = document.getElementById('value2Ex10').value;
    let angle3 = document.getElementById('value3Ex10').value;
    //Converts strings into a string array
    let angles = [angle1, angle2, angle3];
    //Validates the values
    let results = Validation(angles);
    if (results[0].length !== 0) {
        SetHTMLElement('errorEx10', BuildListArray(results[0]));
        return;
    }
    let checkAcuteTriangle = results[1].every(item => {
        return item < 90;
    });
    let angle = '';
    if (checkAcuteTriangle) {
        SetHTMLElement('outputEx10', BuildList("Acute Triangle"));
        document.querySelector('.acute').classList.remove('hidden');
        return;
    }
    let checkObtuseTriangle = results[1].some(item => {
        return item > 90;
    });
    if (checkObtuseTriangle) {
        SetHTMLElement('outputEx10', BuildList("Obtuse Triangle"));
        document.querySelector('.obtuse').classList.remove('hidden');
        return;
    }
    let checkRightTriangle = results[1].some(item => {
        return item === 90;
    });
    if (checkRightTriangle) {
        SetHTMLElement('outputEx10', BuildList("Right Triangle"));
        document.querySelector('.right').classList.remove('hidden');
        return;
    }

    //Displays the result
    // SetHTMLElement('inputEx9',BuildList(inputStringValues));
    // SetHTMLElement('outputEx9', BuildList(`${stringResult} = ${stringSum} = ${sum}`));
}

function Validation(angles) {
    let errorMessages = [];

    let isValidNumber = angles.every(item => {
        return isPositiveInteger(item);
    });
    if (!isValidNumber) {
        errorMessages.push('All angles must be positives integer numbers');
    }
    let anglesNumbers = angles.map(item => {
        return Number(item);
    });
    let isAnyAngleLessThan180 = angles.some(item => {
        return item < 180;
    });
    if (!isAnyAngleLessThan180) {
        errorMessages.push('All angles must be lesser than 180');
    }
    if (anglesNumbers[0] + anglesNumbers[1] + anglesNumbers[2] !== 180) {
        errorMessages.push('The sum of 3 angles must be 180');
    }
    return [errorMessages, anglesNumbers];
}

function HideTriangleImages () {
    let triangles = document.querySelectorAll('.triangle');
    triangles.forEach(item => {
        item.classList.add('hidden');
    });
}