export const BOARDSIZE = 8;

export const cpieces = {
	BH: "bknight",
	BQ: "bqueen",
	BK: "bking",
	BR: "brook",
	BP: "bpawn",
	BB: "bbishop",
	WH: "wknight",
	WQ: "wqueen",
	WK: "wking",
	WR: "wrook",
	WP: "wpawn",
	WB: "wbishop",
	NONE: "",
};

export const colors = {
	W: "w",
	B: "b",
};

export const pieces = {
	H: "knight",
	Q: "queen",
	K: "king",
	R: "rook",
	B: "bishop",
	P: "pawn",
};

export const piecedirs = {
	H : {
		n : 1,
		dirs: [[2, 1],[1, 2],[2, -1],[1, -2],[-2, 1],[-1, 2],[-2, -1],[-1, -2]]
	},
	B : {
		n : BOARDSIZE-1,
		dirs: [[0,1], [1,0], [0,-1], [-1,0]]
	},
	R : {
		n : BOARDSIZE-1,
		dirs: [[1,1], [-1,-1], [1,-1], [-1,1]]
	},
	Q : {
		n : BOARDSIZE-1,
		dirs: [[0,1], [1,0], [0,-1], [-1,0], [1,1], [-1,-1], [1,-1], [-1,1]]
	},
	K : {
		n : 1,
		dirs: [[0,1], [1,0], [0,-1], [-1,0], [1,1], [-1,-1], [1,-1], [-1,1]]
	}
}