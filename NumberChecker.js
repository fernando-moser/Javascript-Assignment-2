function isInteger(x) {
    return isFloat(x) && Number(x) === Math.floor(x);
}

function isFloat(x) {
    return isFinite(x) && Number(x) === parseFloat(x);
}
