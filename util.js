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