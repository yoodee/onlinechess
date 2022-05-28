import React from "react";
import Block from "../Atoms/Block";
import { colors } from "../../Utils/configs";
import { getColor, getIdFromIndex, getIndexFromId } from "../../Utils/blocks";
import { getLocationInfo } from "../../Utils/Pieces";
import { isLegal } from "../../Utils/Turns";
import { useState } from "react";

export default function Board() {
	const [turn, setTurn] = useState(colors.W);
	const [selected, setSelected] = useState(null);
	const [board, setBoard] = useState([
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
	]);

	const updateBoard = (initialPos, newPos) => {
		const [ini, inj] = getIndexFromId(initialPos);
		const [newi, newj] = getIndexFromId(newPos);

		const movingPiece = board[ini][inj];

		const newBoard = board.map((row, i) =>
			row.map((item, j) => {
				if (ini === i && inj === j) {
					return "";
				} else if (newi === i && newj === j) {
					return movingPiece;
				} else {
					return item;
				}
			})
		);
		setBoard(newBoard);
	};

	const onClickPiece = (id) => {
		console.log(id);
		if (selected !== null) {
			if (getLocationInfo(turn, getIndexFromId(id), board) === 1) {
				setSelected(id);
			} else {
				if (
					isLegal(
						turn,
						getIndexFromId(selected),
						getIndexFromId(id),
						board
					)
				) {
					updateBoard(selected, id);
					setSelected(null);
					setTurn((t) => (t === colors.W ? colors.B : colors.W));
				} else {
					console.log("illegal move");
				}
			}
		} else {
			if (
				getLocationInfo(turn, getIndexFromId(id), board) !== -1 &&
				getLocationInfo(turn, getIndexFromId(id), board) !== 0
			) {
				setSelected(id);
			}
		}
	};
	return (
		<div
			className='flex flex-row flex-wrap-reverse'
			style={{ width: "32rem" }}
		>
			{board.map((row, i) =>
				row.map((content, j) => (
					<Block
						piece={content}
						color={getColor(i, j)}
						id={getIdFromIndex([i, j])}
						onclick={onClickPiece}
					/>
				))
			)}
		</div>
	);
}
