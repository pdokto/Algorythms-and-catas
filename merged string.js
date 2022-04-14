//after kata https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript
//not working when same letter is checked
//possible solution: check also letter after current letter?

/*
function isMerge(s, part1, part2) {
  
  for (let i=0; i< s.length; i++ ){
    if (s[i] === part1[0]) 
      part1=part1.slice(1, part1.length)
  	else if(s[i] === part2[0]) 
      part2=part2.slice(1, part2.length)
  	if (part1.length ===0 && part2.length===0) return true
  }
  return false;
}



isMerge ('xcyc', 'xc', 'cy') //true
*/

// second attempt with different approach
/*
function isMerge(s, part1, part2) {
return (part1+part2).split("").sort().join()== s.split("").sort().join()? true : false
}
*/


//will solve most tests but one not where the order is important.
//maybe reverse enginerring it would be best or find a way to check if the order has changed

/*


function isMerge(s, part1, part2) {
//convert to array to sort it and join it back to campare it
  let a=(part1+part2).split("").sort().join("")
  let b=s.split("").sort().join("")
  let orderPart1=[]
  let orderPart2=[]
  let orderChanged=false
 	
//try to find if order is different  
//this approach probably has problems when there are non unique chars but will work for the given test but fails another one

  for (let i=0; i<part1.length; i++){
  	orderPart1.push(s.indexOf(part1[i]))
  }
  for (let i=0; i<part1.length; i++){
  	orderPart2.push(s.indexOf(part2[i]))
  }
  
  for (let i=0; i <orderPart1.length-1; i++){
    if (orderPart1[i] > orderPart1[i+1]) orderChanged=true
  }
  for (let i=0; i <orderPart1.length-1; i++){
    if (orderPart2[i] > orderPart2[i+1]) orderChanged=true
  }
  
  if (a===b && orderChanged===false) return true
  return false
}
*/
