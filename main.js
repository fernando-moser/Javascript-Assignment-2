window.onload = function () {
    //Hides all tabs
    HideAll();
    //Adds an event listener in the list
    this.document.getElementById('tabList').addEventListener('click', ShowTab);
}

function ShowTab(e) {
    
    let item = e.target.id;

    switch (item) {
        case '1':
            Exercise1(item);
            break;
        case '2':
            Exercise2(item);
            break;
        case '3':
            Exercise3(item);
            break;
        case '4':
            Exercise4(item);
            break;
        case '5':
            Exercise5(item);
            break;
        case '6':
            Exercise6(item);
            break;
        case '7':
            Exercise7(item);
            break;
        case '8':
            Exercise8(item);
            break;
        case '9':
            Exercise9(item);
            break;
        case '10':
            Exercise10(item);
            break;
        default:
            return;
            break;
    }
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



