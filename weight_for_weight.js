//solutuon to kata https://www.codewars.com/kata/55c6126177c9441a570000cc


function orderWeight(strng) {
  let arr= []   
  const obj = strng.split(' ').map(function(number) {
      let temp =0
      for (let i=0; i<number.length; i++) {
        temp+=Number(number[i])
      }
      return {number, temp }
    })
  obj.sort(function(a,b){
    if (a.temp < b.temp) return -1
    if (a.temp > b.temp) return 1
    if (a.temp = b.temp){
      if (a.number < b.number) return -1
      if (a.number > b.number) return 1
    }
  })
  
  for (let i= 0; i<obj.length; i++) arr.push(obj[i].number)
  return arr.join(" ")
}
