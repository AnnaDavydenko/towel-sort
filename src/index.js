module.exports = function towelSort (matrix) {
  if (matrix === undefined  || matrix.length === 0){
    return [];
  }
  let a = [];

  matrix.forEach(function(item, index){
    if (index%2==0){
      a.push(item.sort((a,b)=>a-b))
    } else {
      a.push(item.sort((a,b)=>b-a))
    }
  })
   
return a.flat();
}
