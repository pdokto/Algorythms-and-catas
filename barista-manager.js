//https://www.codewars.com/kata/624f3171c0da4c000f4b801d
//struggled for a while until i remembered that sort() will sort 1, 10, 100, 20 without custom sort function

function barista(coffees, cMachines){
 let time=0
 let arr=Array(cMachines).fill(0)
 let customers=[]
 
 coffees.sort(function(a,b){return a-b})
	for (let i=0; i< coffees.length; i++){
		if (arr[0]>0){
    	arr[0]+=coffees[i]+2
    } else {
      arr[0]+=coffees[i]

    }
 		time+=arr[0]
    arr.sort(function(a,b){return a-b})	
  }
  return time
}
