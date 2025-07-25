import "./Chess.css";

import { BoardContext } from "../../store/BoardContext";
import { useContext } from "react";
import {
	obj_a,
	obj_b,
	obj_n,
	obj_k,
	obj_p,
	obj_r,
	obj_c,
} from "../../services/dataChess";

const Chess = ({ id, piece }) => {
	const { game, setValidSquare, selectedChess, setSelectedChess } =
		useContext(BoardContext);

	const type = [
		obj_a.type,
		obj_b.type,
		obj_n.type,
		obj_k.type,
		obj_p.type,
		obj_r.type,
		obj_c.type,
	];

	const image = [
		obj_a.image,
		obj_b.image,
		obj_n.image,
		obj_k.image,
		obj_p.image,
		obj_r.image,
		obj_c.image,
	];

	// Xử lí sự kiện khi ấn vào chess
	const handleClick = (e) => {
		// Lấy tọa độ từ id của chess được chọn
		const [curX, curY] = id.split("-").map(String);

		if (
			selectedChess.coordinate.row === curY &&
			selectedChess.coordinate.col === curX
		) {
			// Nếu Chess hiện tại đang được chọn thì bỏ chọn
			e.target.classList.remove("selected");

			setSelectedChess((prev) => ({
				...prev,
				coordinate: { row: null, col: null },
			}));

			// Xóa các nước có thể đi
			setValidSquare([]);
		} else {
			// Kiểm tra quân được select có cùng màu không
			if (selectedChess.color !== piece.color) return;

			// Nếu đang chọn quân này mà chọn quân khác sẽ unSelect quân này
			if (selectedChess.coordinate.row !== null) {
				// Lấy tọa độ chess được chọn trước đấy
				const [preX, preY] = [
					selectedChess.coordinate.col,
					selectedChess.coordinate.row,
				];

				document
					.getElementById(
						`${game.get(preX + preY).type}-${
							game.get(preX + preY).color
						}-${preX}-${preY}`
					)
					.classList.remove("selected");
			}

			// Cập nhật class cho chess được chọn
			e.target.classList.add("selected");

			// Tìm vị trí quân cờ đã chọn
			const [selectedCol, selectedRow] = id.split("-").map(String);

			// Cập nhật vị trí quân được chọn
			setSelectedChess((prev) => ({
				...prev,
				coordinate: { row: selectedRow, col: selectedCol },
			}));

			// Lấy các nước đi hợp lệ chess được chọn
			const allValidMove = game.moves({ square: curX + curY });
			const allValidSquare = allValidMove.map((move) => move.slice(2));

			if (allValidMove.length > 0) setValidSquare(allValidSquare);
		}
	};

	return (
		<>
			{piece && (
				<div
					id={piece.type + "-" + piece.color + "-" + id}
					className="chinese__chess--piece"
					onClick={handleClick}
					style={{
						backgroundColor:
							piece.color === "r" ? "#b22222" : "black",
					}}
				>
					<img
						className="chinese__chess--piece--image"
						src={
							type.includes(piece.type) &&
							image[type.indexOf(piece.type)]
						}
						alt={piece.type}
					/>
				</div>
			)}
		</>
	);
};

export default Chess;
