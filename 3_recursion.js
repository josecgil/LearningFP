Array.prototype.sum=function() {
    var toFloatOrZero=function(value) {
        var valueConverted=parseFloat(value);
        if (isNaN(valueConverted)) return 0;
        return valueConverted;
    };

    var recursiveSum=function(array){
        var arrayLen = array.length;
        var firstElementValue = toFloatOrZero(array[0]);
        if (arrayLen==2) {
            var secondElementValue = toFloatOrZero(array[1]);
            return firstElementValue + secondElementValue;
        }
        var restOfTheArray = array.slice(1, arrayLen);
        return firstElementValue+recursiveSum(restOfTheArray);
    };
    return recursiveSum(this);
};