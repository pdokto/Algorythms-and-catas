//after kata https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa/train/javascript
//not working when same letter is checked
//possible solution: check also letter after current letter?

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
