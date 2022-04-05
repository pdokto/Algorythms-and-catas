// from cata https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript

// first solution

function transpose(matrix) {
	let newMatrix=[]
  if (matrix.length===1) return matrix
  for(let i=0; i<matrix[0].length; i++){
    let tempMatrix=[]
    for(let j=0; j<matrix.length; j++){
      tempMatrix.push(matrix[j][i])
    }
 	newMatrix.push(tempMatrix)
  }
  return newMatrix
}
