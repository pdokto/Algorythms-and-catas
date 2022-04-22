//https://www.codewars.com/kata/52597aa56021e91c93000cb0/


function moveZeros(arr) {
  newArr=arr.filter(number => number !==0) //!== only filters out zeros that are a number
  const zeros = arr.length-newArr.length //how many zeros have been filtered
  const zeroArr=new Array(zeros).fill(0) // create a new arr that is prefilled
  return newArr.concat(zeroArr)
}
