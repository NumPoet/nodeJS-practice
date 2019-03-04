const Math = {};

function add(x1, x2){
    return x1 + x2;
}

function substract(x1, x2){
    return x1 - x2;
}

function multiply(x1, x2){
    return x1 * x2;
}

function divide(x1, x2){
    if(x2 == 0){
        console.log('no se puede dicidir por cero')
    }else{
        return x1 / x2;
    }
}

/** un Export para todo el modulo */

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;

/* **Un export por cada funcion ***
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
*/