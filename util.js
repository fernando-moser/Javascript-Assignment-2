function ShowAlert(message) {
    alert(message);
}

function BuildListArray(array) {
    let output = '<ul>';
    array.forEach(element => {
        output += '<li>' + element + '</li>';
    });
    
    return output + '</ul>';
}

function BuildList() {
    let output = '<ul>';
    for(let i = 0; i < arguments.length; i++) {
        output += '<li>' + arguments[i]  + '</li>';
    }
    return output + '</ul>';
}

function CleanResults() {
    for(let i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).innerHTML = "";
    }
}

function SetHTMLElement(id, content) {
    return document.getElementById(id).innerHTML = content;
}

function HideAll() {
    let elements = document.querySelectorAll('.tab');
    elements.forEach(element => {
        element.classList.add('hidden');
    });
    let menus = document.querySelectorAll('.tabSelector');
    menus.forEach(menu => {
        menu.classList.remove('selected');
    });
}

function Initialize(item) {
    //Hides all other tabs
    HideAll();
    //Shows this tab
    document.getElementById(`tab${item}`).classList.remove('hidden');
    document.getElementById(item).classList.add('selected');
}

function GetFormater() {
    const options = { style: 'currency', currency: 'USD' };
    const numberFormater = new Intl.NumberFormat('en-US', options);
    return numberFormater;
}