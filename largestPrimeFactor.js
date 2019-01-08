exports.largestPrimeFactor = function (n) {
  var primeNumber = 2;
  while (n > 2) {
    if (n % primeNumber === 0) {
      n = n / primeNumber;
    } else (
      primeNumber++
    )
  }
  // function isPrime(num) {
  //   var i = 2;
  //   while (i < num) {
  //     if (num % i === 0) {
  //       return false;
  //     }
  //     i++;
  //   }
  //   return true;
  // }

  // for (var i = 2; i < n; i++) {
  //   if (n % i === 0 && isPrime(i)) {
  //     primeNumber = i;
  //   }
  // }
  return primeNumber;
};