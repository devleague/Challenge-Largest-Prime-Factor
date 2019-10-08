exports.largestPrimeFactor = function(n) {
  let primeNumber = -1;
  var i,j;
  
  while(n%2==0)
  { 
       primeNumber = 2; 
       n>>=1;  
  } 
  
  for (int i = 3; i <= sqrt(n); i += 2)
  { 
        while(n%i==0)
        { 
            primeNumber=i; 
            n=n/i; 
        } 
  } 
  
  if(n>2) 
     primeNumber=n;
  
  return primeNumber;
};
