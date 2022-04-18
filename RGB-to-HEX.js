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
