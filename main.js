window.onload = function () {
    //Hides all tabs
    HideAll();
    //Show exercise 1 as default tab visible
    Exercise1('1');
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