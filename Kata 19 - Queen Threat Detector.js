let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let output = [];
let boardColumns = 8;

// Placeholders for whiteQueen and blackQueen X and Y axis
let whiteX = whiteQueen[0];
let whiteY = whiteQueen[1];
let blackX = blackQueen[0];
let blackY = blackQueen[1];


const generateBoard = (whiteQueen, blackQueen) => {
  // Create 8 x 8 chessboard 
  for (let i = 0; i < boardColumns; i++) {
    output[i] = [];
    for (let j = 0; j < boardColumns; j++) {
      // 0 in array represents an unoccupied square
      output[i].push(0);
    }
  }
  // 1 in the array represents a queen on the corresponding square
  output[whiteX][whiteY] = 1;
  output[blackX][blackY] = 1;
  return output;
};

// Check if 2 queens are positioned to attack each other
const queenThreat = (generatedBoard) => {
  // If both queens are in the same row (X-axis)
  if (whiteX === blackX) return true;

  // If both queens are in the same column (Y-axis)
  if (whiteY === blackY) return true;

  // If both queens locates diagonally
  if (Math.abs(whiteX - blackX) === Math.abs(whiteY - blackY)) return true;

  // Cannot attack
  return false;
};


let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
