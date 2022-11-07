function sum(number1) {
    return function(number2) {
        return number1 + number2;
    };
}

let result = sum(871);
console.log(result(342));