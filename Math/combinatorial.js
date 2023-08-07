function noPermsDigits(n){
    const factorial=fact(n);
      return parseInt(BigInt(factorial).toString().length);
  }
  const fact=(n)=>{
      if (n==0)
          return BigInt(1);
      return BigInt(n)* fact(n-1);
  }
  console.log(noPermsDigits(5));