import { useState } from "react";
import { Xiangqi } from "../lib/xiangqi/xiangqi.js";
import { BoardContext } from "./BoardContext";

const Board = ({ children }) => {
	const [game, setGame] = useState(new Xiangqi());
	const [validSquare, setValidSquare] = useState([]);
	const [history, setHistory] = useState([]);
	const [selectedChess, setSelectedChess] = useState({
		coordinate: { row: null, col: null },
		color: "r",
	});

	const turn = game.turn();

	return (
		<BoardContext.Provider
			value={{
				game,
				setGame,
				turn,
				history,
				setHistory,
				validSquare,
				setValidSquare,
				selectedChess,
				setSelectedChess,
			}}
		>
			{children}
		</BoardContext.Provider>
	);
};

export default Board;
