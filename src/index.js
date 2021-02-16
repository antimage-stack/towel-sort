module.exports = function towelSort (matrix) {
  if ( !matrix || matrix.length == 0 ) return []

  let array = []
  
  for ( let i = 1; i <= matrix.length - 1; i+= 2 ) {
    matrix[i].reverse()
  }

  for ( let item of matrix ) {
    array = array.concat(item)
  }
  return array
}