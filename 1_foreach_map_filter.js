Array.prototype.forEach2=function(callbackFn) {
    for(var index=0; index<this.length; index++){
        var element = this[index];
        callbackFn(element, index);
    }
};

Array.prototype.map2=function(callbackFn) {
    var mappedArray=[];
    this.forEach2(function(element, index){
        mappedArray.push(callbackFn(element, index));
    });
    return mappedArray;
};

Array.prototype.filter2=function(callbackFn) {
    var filteredArray=[];
    this.forEach2(function(element, index){
        if (callbackFn(element, index)) {
            filteredArray.push(element);
        }
    });
    return filteredArray;
};

[1,2,3,4,5].map2(function(i){
    return i*2;
});

[1,2,3,4,5].filter2(function(i){
    return i%2!=0;
});

