function intervalNumbers (number1, number2) {
  let result = [];
  
  for (let i = number1; i <= number2; i++) {
    result.push(i);
  }
  
  return console.log(result.join(', '));
}


const intervalId = setInterval(intervalNumbers, 1000, 5, 15);

setTimeout(function() {
  clearInterval(intervalId)
}, 5000);