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
