//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

//solution will not work for every language but did for the tests

function pigIt(str){
  let splitted=str.split(" ")
  let tempStr=""
  for (let i=0; i<splitted.length; i++){
    //check if last char is a letter (will only work if there is a single non-letter)
    if(splitted[i].slice(-1).toLowerCase() !== splitted[i].slice(-1).toUpperCase()) {
      tempStr =splitted[i].substring(1)+splitted[i].substring(0,1)+"ay"
    }else if(splitted[i].length===1){
      tempStr=splitted[i]
    }else{
			tempStr =splitted[i].substring(1, splitted[i].length)+splitted[i].substring(0,1)+"ay"
    }
    splitted[i]=tempStr
  }
	return splitted.join(" ")
}
