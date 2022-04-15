//after kata https://www.codewars.com/kata/529bf0e9bdf7657179000008
//check with SET if line/row/3x3subgrid is correct
//alternatively check if sum is also ways 45 in these

function validSolution(board){	
  const set = new Set(...board)
  let subGrid=[]
  let counter=0
  
  if(set.has(0)===true) return false
  
  for (let i=0; i<9; i++){
    //check rows
    if (new Set (board[i]).size!=9)  return false
    //check columns 
    if (new Set (board.map(row=>row[i])).size !=9)  return false
    //check subgrids 
    //create 9 subgrids that automatically have to correct starting points as an 1D array for easy use
    for (let j=0; j<3; j++){
      for (let k=0; k<3; k++){
        subGrid.push(board[j+(i%3*3)][k+counter*3])
      }
    }  
  	//console.log(subGrid)
    if(new Set (subGrid).size<9) return false
    subGrid=[]
  	if (i%3===2) counter+=1                 
  }
return true
}
