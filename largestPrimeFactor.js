exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  // do your work here
  let factors = [];
  for(let i = 2; i <= n; i++){
    if(n % i === 0){
      factors.push(i);
    }
  }
  
  function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0){
        return false;
      }
    return num !== 1;
  }

  for(i = 0; i < factors.length; i++){
    if(isPrime(factors[i])){
      primeNumber = factors[i];
    }
  }
  return primeNumber;
};