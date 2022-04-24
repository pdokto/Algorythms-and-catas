//https://www.codewars.com/kata/522551eee9abb932420004a0

function nthFibo(n) {
  let fibo=[0,1]
  if (n>2){
    for (let i=0; i<n-2; i++) fibo.push(fibo[i]+fibo[i+1])
  }
  return fibo[n-1]
}
