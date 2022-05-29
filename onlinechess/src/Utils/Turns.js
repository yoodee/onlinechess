import { colors, pieces } from "./configs";
import {
	calcBishopPossibleMoves,
	calcKingPossibleMoves,
	calcKnightPossibleMoves,
	calcPawnPossibleMoves,
	calcQueenPossibleMoves,
	calcRookPossibleMoves,
} from "./Pieces";

export const isLegal = (color, [i, j], target, board) => {
	const piece = board[i][j].substring(1);
	const pMoves = calcPossibleMoves(piece, color, [i, j], board);
	let flag = false;
	console.log("Possible: ", pMoves, " Target: ", target);
	pMoves.forEach(([pi, pj]) => {
		console.log([pi, pj] + "     " + [target[0], target[1]]);
		if (pi === target[0] && pj === target[1]) {
			flag = true;
		}
	});
	return flag;
};

const calcPossibleMoves = (piece, color, location, board) => {
	const piecefuncs = {
		[pieces.H]: calcKnightPossibleMoves,
		[pieces.B]: calcBishopPossibleMoves,
		[pieces.K]: calcKingPossibleMoves,
		[pieces.P]: calcPawnPossibleMoves,
		[pieces.Q]: calcQueenPossibleMoves,
		[pieces.R]: calcRookPossibleMoves,
	};
	let pMoves = piecefuncs[piece](color, location, board);

	return pMoves;
};
