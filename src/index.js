
// You should implement your task here.

module.exports = function towelSort(matrix){
  res = []
  matrix?.forEach((m, i)=>{
    i % 2 == 0 ? res.push(...m) : res.push(...m.reverse())
  })
  return res
}