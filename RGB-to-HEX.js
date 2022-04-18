//after kata: https://www.codewars.com/kata/513e08acc600c94f01000001
//1. check if numbers are between 0 and 255
//2. convert to hex
//3. result has to be 6 digits long > check length and modify if needed

function rgb(r, g, b){
 
  function checkValidValue(value){
    if (value < 0) return 0
    if (value > 255) return 255
    return value
  }
  
  r=checkValidValue(r).toString(16)
  g=checkValidValue(g).toString(16)
  b=checkValidValue(b).toString(16)
 
	
  if(r.length < 2) r="0"+r
  if(g.length < 2) g="0"+g
  if(b.length < 2) b="0"+b
  
  return (r + g + b).toUpperCase()
}

//not following DRY
// better solution:

function rgb(r, g, b){
 
  function toHex(value){
    if (value < 0) return "00"
    if (value > 255) return "FF"
    return ("0"+Number(value).toString(16)).slice(-2).toUpperCase() 
  }
 
 //length of value will sometimes be 1, so function will always add a "0" before and then slice(-2). Will cut off if the "0" 
// at the beginning is too much 
  return toHex(r) + toHex(g) + toHex(b)
}
