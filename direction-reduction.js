//https://www.codewars.com/kata/550f22f4d758534c1100025a
//straightforward, unfancy approach

function dirReduc(arr){
	let index=0
  for (let i=0; i<arr.length; i++){
    if ((arr[i]==="NORTH" && arr[i+1]==="SOUTH") || (arr[i]==="SOUTH" && arr[i+1]==="NORTH")) {
      arr.splice (i,2)
      i=-1
    } else if ((arr[i]==="EAST" && arr[i+1]==="WEST") || (arr[i]==="WEST" && arr[i+1]==="EAST")){
      arr.splice (i, 2)
      i=-1
    }
  }
  return arr
}
