import { BOARDSIZE, colors, cpieces, piecedirs, pieces } from "./configs";

const getKingPosition = (board, color) => {
	let k = colors[color] + pieces.K;
	for (let i = 0; i < BOARDSIZE; i++) {
		for (let j = 0; j < BOARDSIZE; j++) {
			if (board[i][j] === k) {
				return [i, j];
			}
		}
	}
	throw Error("King Not Found in Board");
};

const flip = (color) => {
	return color === "W" ? "B" : "W";
};

const getColorOfPiece = (cpiece) => {
	return cpiece[0];
};

const checkFrom = (board, player, piece) => {
	let kingPos = getKingPosition(board, player);
	let opponentpiece = flip(player) + piece;
	let dirs = piecedirs[piece].dirs;
	let n = piecedirs[piece].n;
	for (let dir in dirs) {
		for (
			let i = kingPos[0] + dir[0], j = kingPos[1] + dir[1], c = 0;
			i >= 0 && i < BOARDSIZE && j >= 0 && j < BOARDSIZE && c < n;
			i += dir[0], j += dir[1], c += 1
		) {
			if (board[i][j] === cpieces[opponentpiece]) return true;
			if (board[i][j] !== cpieces.NONE) break;
		}
	}
	return false;
};

const checkFromPawn = (board, player) => {
	//TODO
};

export const getColor = (i, j) => ((i + j) % 2 === 0 ? "#ccc" : "#777");

export const getIdFromIndex = ([i, j]) => {
	const dict = {
		0: "A",
		1: "B",
		2: "C",
		3: "D",
		4: "E",
		5: "F",
		6: "G",
		7: "H",
	};
	return `${dict[i]}${j + 1}`;
};

export const getIndexFromId = (id) => {
	const dict = {
		A: 0,
		B: 1,
		C: 2,
		D: 3,
		E: 4,
		F: 5,
		G: 6,
		H: 7,
	};

	return [dict[id.charAt(0)], parseInt(id.charAt(1)) - 1];
};
