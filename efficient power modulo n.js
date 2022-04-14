//after kata https://www.codewars.com/kata/52fe629e48970ad2bd0007e6

function modpow(x, y, n) {
  if (n===1) return 0
  let result=1
  x=x%n
 while (y>0) {
   if (y % 2==1){
     result=(result*x) % n
   }  
   x=(x*x)%n  
   y=Math.floor(y / 2)
   
 	}
  return result
}

//actually researched the algorithm solution and implemented it only in js
