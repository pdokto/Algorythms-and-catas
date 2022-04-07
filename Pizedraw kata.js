//https://www.codewars.com/kata/5616868c81a0f281e500005c/train/javascript

function rank(st, we, n) {
  if (st.length===0) return "No participants"
  if (we.length < n) return "Not enough participants"
  
  const alpha=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let arr =  st.split(",")
 
  //calculating the values
  const mapped = arr.map( (name, index) => {
    let som=name.length
		for (let i=0; i<name.length; i++){
      som+= alpha.indexOf(name[i].toLowerCase())+1
    }
    som=som*we[index]
    return {name:name, som:som}
  })
  //sorting with custom sort function
  mapped.sort(function(a,b){
		if(a.som < b.som) return 1
    if(a.som > b.som) return -1
  	if(a.som = b.som) {
      if (a.name < b.name) return -1
			if (a.name > b.name) return 1
    }
  })
  return mapped[n-1].name
}
