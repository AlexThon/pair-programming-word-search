const transpose = function(matrix) {
  // we will return an array
  let transposed = [];

  for (let k = 0; k < matrix[0].length; k++) { //rows
    let col = [];
    for (let j in matrix) { //columns
      col.push(matrix[j][k]);
    }
    transposed.push(col);
  }
  return transposed;
};



const wordSearch = (letters, word) => {
  if (!letters || !word) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word))  {
      return true;
    }
  }
  let newArr = transpose(letters);
  const verticalJoin = newArr.map(arr => arr.join(''));
  for (let a of verticalJoin) {
    if (a.includes(word))  {
      return true;
    }
  }

  return false;
    
};


const result = wordSearch([
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'FRANK');
console.log(result);

  
module.exports = wordSearch;


