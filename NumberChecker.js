function isInteger(x) {
    return isFloat(x) && Number(x) === Math.floor(x);
}
function isPositiveInteger(x) {
    return isFloat(x) && Number(x) === Math.floor(x) && Number(x) > 0;
}

function isFloat(x) {
    return isFinite(x) && Number(x) === parseFloat(x);
}
