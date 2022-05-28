import { BOARDSIZE, colors, cpieces, piecedirs, pieces } from "./configs";

export const getColor = (i, j) => ((i + j) % 2 == 0 ? "#ccc" : "#777");

const getKingPosition = (board, color) => {
  let k = colors[color] + pieces.K
  for (let i = 0; i < BOARDSIZE; i++) {
    for (let j = 0; j < BOARDSIZE; j++){
      if (board[i][j] === k){
        return [i,j];
      }
    }
  }
  throw Error("King Not Found in Board");
}

const flip = (color) => {
  return color==='W'?'B':'W';
}

const getColorOfPiece = (cpiece) => {
  return cpiece[0];
}

const checkFrom = (board, player, piece) => {
  let kingPos = getKingPosition(board, player);
  let opponentpiece = flip(player) + piece;
  let dirs = piecedirs[piece].dirs;
  let n = piecedirs[piece].n;
  for (let dir in dirs){
    for (
      let i = kingPos[0] + dir[0], j = kingPos[1] + dir[1], c = 0;
      i >= 0 && i < BOARDSIZE && j >= 0 && j < BOARDSIZE && c < n;
      i += dir[0], j += dir[1], c += 1) {
      if (board[i][j] === cpieces[opponentpiece])
        return true;
      if (board[i][j] !== cpieces.NONE)
        break;
    }
  }
  return false;
}

const checkFromPawn = (board, player) => {
  //TODO
}