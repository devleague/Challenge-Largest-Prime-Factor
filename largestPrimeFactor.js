exports.largestPrimeFactor = function(n){
  let primeNumber = 0;
  let i=2;
while (i<=n){
    if (n%i == 0){
        n/=i;    
    }else{
        i++;
    }
}
primeNumber = i
return primeNumber;
}
