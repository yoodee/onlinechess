import { colors, pieces } from "./configs";

//TODO: Check if king is in possible move location

export const calcPawnPossibleMoves = (color, location, board) => {
	//#TODO: white or black piece direction
	let possibleMoves = [];
	const [i, j] = location;
	if (getLocationInfo(color, [i - 1, j - 1], board) === -1)
		possibleMoves.push([i - 1, j - 1]);
	if (getLocationInfo(color, [i - 1, j + 1], board) === -1)
		possibleMoves.push([i - 1, j + 1]);
	if (getLocationInfo(color, [i - 1, j], board) === 0)
		possibleMoves.push([i - 1, j]);
	if (i === 6) {
		if (getLocationInfo(color, [i + 2, j], board) === 0)
			possibleMoves.push([i - 2, j]);
	}
	return possibleMoves;
};

export const calcKnightPossibleMoves = (color, location, board) => {
	let possibleMoves = [];
	const [i, j] = location;

	const locations = [
		[i - 2, j + 1],
		[i - 2, j - 1],
		[i + 2, j + 1],
		[i + 2, i - 1],
		[i - 1, j + 2],
		[i + 1, j + 2],
		[i - 1, j - 2],
		[i + 1, j - 2],
	];

	for (let val in locations) {
		if (
			getLocationInfo(color, locations[val], board) === 0 ||
			getLocationInfo(color, locations[val], board) === -1
		)
			possibleMoves.push(locations[val]);
	}

	return possibleMoves;
};

export const calcRookPossibleMoves = (color, location, board) => {
	let possibleMoves = [];
	const [i, j] = location;
	//towards right
	for (let k = i; k < 8; k++) {
		if (
			getLocationInfo(color, [k, j], board) === 0 ||
			getLocationInfo(color, [k, j], board) === -1
		) {
			possibleMoves.push([k, j]);
			if (getLocationInfo(color, [k, j], board) === -1) break;
		}
	}
	//towards left
	for (let k = i; k >= 0; k--) {
		if (
			getLocationInfo(color, [k, j], board) === 0 ||
			getLocationInfo(color, [k, j], board) === -1
		) {
			possibleMoves.push([k, j]);
			if (getLocationInfo(color, [k, j], board) === -1) break;
		}
	}
	//towards bottom
	for (let k = j; k < 8; k++) {
		if (
			getLocationInfo(color, [i, k], board) === 0 ||
			getLocationInfo(color, [i, k], board) === -1
		) {
			possibleMoves.push([i, k]);
			if (getLocationInfo(color, [i, k], board) === -1) break;
		}
	}
	//towards top
	for (let k = j; k >= 0; k--) {
		if (
			getLocationInfo(color, [i, k], board) === 0 ||
			getLocationInfo(color, [i, k], board) === -1
		) {
			possibleMoves.push([i, k]);
			if (getLocationInfo(color, [i, k], board) === -1) break;
		}
	}

	return possibleMoves;
};

export const calcBishopPossibleMoves = (color, [i, j], board) => {
	let possibleMoves = [];
	//towards top right
	for (let k = i, l = j; k >= 0 && l <= 7; k--, l++) {
		if (
			getLocationInfo(color, [k, l], board) === 0 ||
			getLocationInfo(color, [k, l], board) === -1
		) {
			possibleMoves.push([k, l]);
			if (getLocationInfo(color, [k, l], board) === -1) break;
		}
	}
	//towards top left
	for (let k = i, l = j; k >= 0 && l >= 0; k--, l--) {
		if (
			getLocationInfo(color, [k, l], board) === 0 ||
			getLocationInfo(color, [k, l], board) === -1
		) {
			possibleMoves.push([k, l]);
			if (getLocationInfo(color, [k, l], board) === -1) break;
		}
	}
	//towards bottom right
	for (let k = i, l = j; k <= 7 && l <= 7; k++, l++) {
		if (
			getLocationInfo(color, [k, l], board) === 0 ||
			getLocationInfo(color, [k, l], board) === -1
		) {
			possibleMoves.push([k, l]);
			if (getLocationInfo(color, [k, l], board) === -1) break;
		}
	}
	//towards bottom left
	for (let k = i, l = j; k <= 7 && l >= 0; k++, l--) {
		if (
			getLocationInfo(color, [k, l], board) === 0 ||
			getLocationInfo(color, [k, l], board) === -1
		) {
			possibleMoves.push([k, l]);
			if (getLocationInfo(color, [k, l], board) === -1) break;
		}
	}
	return possibleMoves;
};

export const calcKingPossibleMoves = (color, [i, j], board) => {
	let possibleMoves = [];
	const locations = [
		[i - 1, j],
		[i + 1, j],
		[i + 1, j + 1],
		[i + 1, j - 1],
		[i - 1, j + 1],
		[i - 1, j - 1],
		[i, j + 1],
		[i, j - 1],
	];

	for (let val in locations) {
		if (
			getLocationInfo(color, locations[val], board) === 0 ||
			getLocationInfo(color, locations[val], board) === -1
		)
			possibleMoves.push(locations[val]);
	}

	return possibleMoves;
};

export const calcQueenPossibleMoves = (color, [i, j], board) => {
	let possibleMoves = calcBishopPossibleMoves(color, [i, j], board);
	possibleMoves.concat(calcRookPossibleMoves(color, [i, j], board));
	return possibleMoves;
};

export function getLocationInfo(color, location, board) {
	//returns 0 if empty, 1 if your piece, -1 if opponent's piece, -2 if invalid location
	if (
		location[0] < 0 ||
		location[0] > 7 ||
		location[1] < 0 ||
		location[1] > 7
	)
		return -2;

	let oppC = "";
	if (color === colors.B) oppC = colors.W;
	else oppC = colors.B;

	if (board[location[0]][location[1]] === "") {
		return 0;
	} else if (board[location[0]][location[1]].charAt(0) === oppC) {
		return -1;
	} else {
		return 1;
	}
}
