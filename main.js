window.onload = function () {
    HideAll();

    this.document.getElementById('tabList').addEventListener('click', ShowTab);
}

function ShowTab(e) {

    let button = e.target.innerHTML;
    let tab = `tab${e.target.innerHTML}`;

    switch (button) {
        case '1':
            Exercise1(tab);
            break;
        case '2':
            Exercise2(tab);
            break;
        case '3':
            Exercise3(tab);
            break;
        case '4':
            Exercise4(tab);
            break;
        case '5':
            Exercise5(tab);
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
}



