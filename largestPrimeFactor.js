exports.largestPrimeFactor = function(n) {
  var primeNumber = 0;
  // do your work here
  let primes = findPrime(Math.ceil(Math.sqrt(n)));

  for (let i = primes.length - 1; i >= 0; i--) {
    if (n % primes[i] === 0) {
      primeNumber = primes[i];
      break;
    }
  }

  function findPrime(num) {
    let prime = new Array(num);
    prime.fill(true);
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (prime[i]) {
        for (let j = i * 2; j < num; j += i) {
          prime[j] = false;
        }
      }
    }
    let temp = [];
    for (let i = 0; i < prime.length; i++) {
      if (prime[i]) {
        temp.push(i);
      }
    }

    prime = temp;
    prime.shift();
    prime.shift();

    return prime;
  }

  return primeNumber;
};

// Sieve of Eratosthenes

// Input: an integer n > 1.

// Let A be an array of Boolean values, indexed by integers 2 to n,
// initially all set to true.

// for i = 2, 3, 4, ..., not exceeding √n:
//   if A[i] is true:
//     for j = i2, i2+i, i2+2i, i2+3i, ..., not exceeding n:
//       A[j] := false.

// Output: all i such that A[i] is true.
