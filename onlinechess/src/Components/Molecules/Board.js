import React from "react";
import Block from "../Atoms/Block";
import { getColor } from "../../Utils/blocks";

export default function Board() {
	let board = [
		[
			"brook",
			"bknight",
			"bbishop",
			"bqueen",
			"bking",
			"bbishop",
			"bknight",
			"brook",
		],
		[
			"bpawn",
			"bpawn",
			"bpawn",
			"bpawn",
			"bpawn",
			"bpawn",
			"bpawn",
			"bpawn",
		],
		["", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", ""],
		["", "", "", "", "", "", "", ""],
		[
			"wpawn",
			"wpawn",
			"wpawn",
			"wpawn",
			"wpawn",
			"wpawn",
			"wpawn",
			"wpawn",
		],
		[
			"wrook",
			"wknight",
			"wbishop",
			"wqueen",
			"wking",
			"wbishop",
			"wknight",
			"wrook",
		],
	];
	return (
		<div className='flex flex-row flex-wrap' style={{ width: "32rem" }}>
			{board.map((row, i) =>
				row.map((content, j) => (
					<Block piece={content} color={getColor(i, j)} />
				))
			)}
		</div>
	);
}
