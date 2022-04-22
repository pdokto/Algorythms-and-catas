//https://www.codewars.com/kata/52223df9e8f98c7aa7000062

//replaceAll() is not useful here

function rot13(str) {
  const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  const output= "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
 
 let rotted=str.split("").map(function(letter)  {
  	
   let index=input.indexOf(letter) 
   if(index >-1) return letter=output[index]
   
   return letter
 }).join("")
  
 return rotted
}


//solution with ternary statement


function rot13(str) {
  const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  const output= "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
 
 let rotted=str.split("").map(function(letter)  {
  	
   let index=input.indexOf(letter)
   return  index >-1? letter=output[index] : letter
 }).join("")
  
 return rotted
}
