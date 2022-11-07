function isSimple (number) {
    let simpleNumber = `В переменную передано простое число: ${number}.`;
    let compNumber = `В переменную передано не простое число: ${number}.`;
    let error = `Данные не верны, введённое число: ${number}.`;

    if (number <= 1 || number > 1000) {
        return error;
    }
    if (number === 2) {
        return simpleNumber;
    }

    for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
            return compNumber;
        } else {
            return simpleNumber;
        }
    }
}

console.log(isSimple(999));