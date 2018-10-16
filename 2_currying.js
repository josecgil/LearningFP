
/*

En lugar de :

var double = function(a) {
    return mult(a, 2);
};

*/

/*
    Currying es el proceso de crear una función que puede ser vista como una
    serie de aplicación de funciones, una por cada parámetro
*/

var mult= function (a) {
    return function (b) {
        return a * b;
    };
};


var four= mult(2)(2);

var double = mult( 2);  //double es ahora una función parcialmente aplicada.

var anotherFour=double(2);