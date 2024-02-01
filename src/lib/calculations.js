// @ts-nocheck

export function getPossibleMoves(grid, x, y) {
  var delta = [{x: 0, y: -1}, {x: 0, y: 1}, {x: -1, y: 0}, {x: 1, y: 0}]
  var possibleMoves = []
  var val = grid[y][x]
  delta.forEach((d) => {
    var newX = x + d.x
    var newY = y + d.y
    if (newX >= 0 && newX < grid[0].length && newY >= 0 && newY < grid.length) {
      console.log(newX, newY,grid[newY][newX], val)
      if(grid[newY][newX] <= val){
        possibleMoves.push({x: newX, y: newY})
      }
    }
  })
  return possibleMoves;
}

export var visited = []

export function findAll(grid, x, y){
  var possibleMoves = getPossibleMoves(grid, x, y)
  visited.push({x, y})
  possibleMoves.forEach(function(m) {
    if(!visited.find(v => v.x == m.x && v.y == m.y)){
      findAll(grid, m.x, m.y)
    }
  })
}