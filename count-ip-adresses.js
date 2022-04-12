//after kata https://www.codewars.com/kata/526989a41034285187000de4


function ipsBetween(start, end){
  const startArr=start.split(".")
  const endArr=end.split(".")
  let localDif=[]
  
  for (let i=0; i<startArr.length; i++){
    localDif.push((endArr[i]-startArr[i])*(Math.pow(256, 3-i)))
  }
return localDif.reduce((a,b)=> a+b)
}
