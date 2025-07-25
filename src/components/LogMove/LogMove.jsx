/* eslint-disable react-hooks/exhaustive-deps */
import "./LogMove.css";

import { useContext, useEffect, useState } from "react";
import { BoardContext } from "../../store/BoardContext";

const BackStack = () => {
	const { history, turn } = useContext(BoardContext);
	const [moveLog, setMoveLog] = useState([]);

	const move = {
		from: null,
		to: null,
	};

	const writeLog = (from, to) => {
		if (from === to) return;

		const currentMove = {
			from: from.toUpperCase(),
			to: to.toUpperCase(),
		};

		setMoveLog((prevLog) => {
			// Kiểm tra lượt đi
			const currentRound =
				prevLog.length > 0
					? prevLog[prevLog.length - 1]
					: { index: prevLog.length + 1, red: null, black: null };

			// Tạo log mới cho quân đỏ
			if (turn === "b") {
				return [
					...prevLog,
					{
						...currentRound,
						index: prevLog.length + 1,
						red: currentMove,
						black: null,
					},
				];
			} else {
				// Ghi lại nước đi của quân đen trong log cuối cùng
				const updatedLog = [...prevLog];

				updatedLog[updatedLog.length - 1] = {
					...currentRound,
					black: currentMove,
				};

				return updatedLog;
			}
		});
	};

	useEffect(() => {
		// Làm trống danh sách log khi restart game
		if (history.length === 0 && moveLog.length > 0) {
			setMoveLog([]);
			return;
		}

		if (history.length === 0) return;

		move.from = history[history.length - 1].from;
		move.to = history[history.length - 1].to;

		writeLog(move.from, move.to);
	}, [history]);

	return (
		<ul className="chinese-chess__log-move">
			{moveLog.map((move, index) => (
				<li key={index}>
					<div className="chinese-chess__log-move--index">
						{move.index}
					</div>

					<div
						className={
							move.black
								? "chinese-chess__log-move--coordination"
								: "chinese-chess__log-move--coordination active"
						}
					>
						{move.red ? `${move.red.from} - ${move.red.to}` : ""}
					</div>

					<div
						className={
							moveLog[moveLog.length - 1].black !== null &&
							moveLog[moveLog.length - 1].black === move.black
								? "chinese-chess__log-move--coordination active"
								: "chinese-chess__log-move--coordination "
						}
					>
						{move.black
							? `${move.black.from} - ${move.black.to}`
							: ""}
					</div>
				</li>
			))}
		</ul>
	);
};

export default BackStack;
