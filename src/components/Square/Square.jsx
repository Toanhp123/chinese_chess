import "./Square.css";

import Chess from "../Chess/Chess";
import { BoardContext } from "../../store/BoardContext";
import { useContext } from "react";
import { Xiangqi } from "../../lib/xiangqi/xiangqi.js";

const Square = ({ id, piece, row, col }) => {
	const {
		game,
		setGame,
		setHistory,
		validSquare,
		setValidSquare,
		selectedChess,
		setSelectedChess,
	} = useContext(BoardContext);

	const handleDrop = (e) => {
		e.preventDefault();
	};

	// Xử lý sự kiện khi click vào square
	const handleClick = () => {
		// Nếu selectedChess tồn tại và validSquare bao gồm id ô được chọn
		if (selectedChess.coordinate.row && validSquare.includes(col + row)) {
			// Tìm vị trí quân cờ đã chọn
			const [selectedRow, selectedCol] = [
				selectedChess.coordinate.row,
				selectedChess.coordinate.col,
			];

			// Di chuyển quân
			game.move({ from: selectedCol + selectedRow, to: col + row });

			// Ghi lại lịch sử nước đi
			setHistory((prev) => [...prev, ...game.history({ verbose: true })]);

			// Cập nhật trạng thái bàn cờ
			setGame(new Xiangqi(game.fen()));

			// // Xóa các ô có khả năng đi được từ ô được chọn
			setValidSquare([]);

			// // Xóa chess được chọn trước đấy
			setSelectedChess((prev) => ({
				...prev,
				coordinate: { row: null, col: null },
			}));
		}
	};

	return (
		<div
			id={id}
			className={`chinese-chess__board--square 
                    ${
						validSquare.includes(col + row)
							? game.get(col + row) === null
								? "can-move-to-square"
								: "can-capture-chess"
							: ""
					}`}
			onDrop={handleDrop}
			onClick={handleClick}
		>
			<Chess id={id} piece={piece} />
		</div>
	);
};

export default Square;
