//https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration (seconds) {	
  if(seconds==0) return "now"
  
  const arr =[String(Math.floor(seconds/31536000)), //years
            String(Math.floor(seconds%31536000/86400)),  //days
            String(Math.floor(seconds%31536000%86400/3600)), //hours
            String(Math.floor(seconds%31536000%86400%3600/60)), //minutes
            String(seconds%31536000%86400%3600%60)] //seconds
  
  const order=["year", "day", "hour", "minute", "second"]
	
  const arr1=arr.map(function(x, index){    		
    		console.log(x, index)
    		if (x==0) return ""
    		if (x==1) return x+ " " + order[index]
    		if (x>1) return x+ " "+ order[index]+ "s"
  }).filter(Boolean)
  
  const end=arr1.slice(-1)
	arr1.pop()
  if(arr1.length >0)return arr1.join(", ") + " and " + end
  return end.toString()
}
