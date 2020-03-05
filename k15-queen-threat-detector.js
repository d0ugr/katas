function generateBoard(whiteQueen, blackQueen)
{
  const board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];

  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;

  return board;
}

function queenThreat(board)
{
  let wx = 0;
  let wy = 0;
  let bx = 0;
  let by = 0;

  // Find the first queen (arbitrarily called white here):
  wx = 0;
  wy = 0;
  while (board[wx][wy] !== 1 && wy <= 7) {
    wx++;
    if (wx > 7) {
      wx = 0;
      wy++;
    }
  }
  // Check if no queens found:
  if (wy > 7) {
    return false;
  }

  // Find the second queen (arbitrarily called black here):
  bx = wx + 1;
  by = wy;
  if (bx > 7) {
    bx = 0;
    by++;
  }
  while (board[bx][by] !== 1 && by <= 7) {
    bx++;
    if (bx > 7) {
      bx = 0;
      by++;
    }
  }
  // Check if second queen not found:
  if (by > 7) {
    return false;
  }

  return (wx === bx || wy === by || Math.abs(bx - wx) === Math.abs(by - wy));
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

/*
generatedBoard = generateBoard([6, 2], [5, 6]);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

generatedBoard = generateBoard([0, 1], [4, 5]);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

generatedBoard = generateBoard([5, 1], [3, 3]);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

generatedBoard = generateBoard([1, 4], [6, 4]);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

generatedBoard = generateBoard([3, 1], [3, 7]);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
*/
