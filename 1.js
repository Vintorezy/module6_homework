let arr = [1, 2, 3, 4, 5, null, undefined, 0, 'string', 'smth']

function oddEvenCount(array) { //Задаем параметр - использование массива
    let evenNumbers = 0;
    let oddNumbers = 0;
    let zeroNumbers = 0;
    let NaNcount = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            NaNcount += 1;
        }
        if (array[i] === 0) {
            zeroNumbers += 1;
        } else if (array[i] % 2 === 0) {
            evenNumbers += 1;
        } else {
            oddNumbers += 1;
        }
    }

    return [evenNumbers, oddNumbers, zeroNumbers, NaNcount]; //Помещаем возвращенные значения в массив

}

let result = oddEvenCount(arr); //Записываем результат функции в переменную для вывода через индекс массива. Не забываем при вызове о том, что индекс начинается с 0.


console.log("В массиве: " + result[0] + " четных, " + result[1] + " нечётных, " + result[2] + " нулей, " + result[3] + " элементов не содержащих цифр.");