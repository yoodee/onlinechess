import React from "react";

export default function Block({ id, piece, color, onclick }) {
	return (
		<div
			key={id}
			className='w-16 h-16 border-2 border-black flex justify-center items-center'
			style={{ backgroundColor: color }}
			onClick={() => onclick(id)}
		>
			{piece !== "" ? (
				<img src={require(`../../Assets/${piece}.svg`)} alt={piece} />
			) : (
				<></>
			)}
		</div>
	);
}
