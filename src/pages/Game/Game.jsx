/* eslint-disable react-hooks/exhaustive-deps */
import "./Game.css";

import {
	btnArrowFirst,
	btnArrowLast,
	btnArrowLeft,
	btnArrowRight,
	btnClose,
	btnResign,
	btnSetting,
	btnUndo,
	btnReset,
	btnHome,
} from "../../services/dataButton.js";
import { cardAI } from "../../services/dataCard.js";
import { aiAvatar } from "../../services/dataProfile.js";

import { BackStack, Board, Button } from "../../components";
import { BoardContext } from "../../store/BoardContext";
import { useContext, useState } from "react";
import { Xiangqi } from "../../lib/xiangqi/xiangqi.js";

const Game = ({ pvp, setLogin }) => {
	const { game, setGame, history, setHistory, turn } =
		useContext(BoardContext);
	const [menu, setMenu] = useState(false);
	const [loss, setLoss] = useState(false);
	const [sur, setSur] = useState(false);
	const [aiLevel, setAILevel] = useState(2);

	const handleUndo = () => {};

	const handleFirstMove = () => {};

	const handleLastMove = () => {};

	const handleBeforeMove = () => {};

	const handleAfterMove = () => {};

	const handleSetting = () => {
		setMenu((prev) => !prev);
	};

	const handleReturnHome = () => {
		setLogin(false);
	};

	const handleRestart = () => {
		game.reset();
		setHistory([]);
		setGame(new Xiangqi(game.fen()));
		setLoss(false);
		setSur(false);
	};

	const handleResign = () => {
		setLoss(true);
		setSur(true);
	};

	const handleChangeDiffs = (depth) => {
		setAILevel(depth);
		setMenu(false);
	};

	return (
		<div className="chinese-chess__game">
			<div className="chinese-chess__game--left">
				{loss && (
					<div className="chinese-chess_game--left--loss">
						<div className="content">
							{!sur ? (
								<h2>
									Bên {turn === "r" ? "đen" : "đỏ"} đã chiến
									thắng!!!
								</h2>
							) : (
								<h2>Bạn đã đầu hàng!!!</h2>
							)}

							<Button
								text={"Đấu lại"}
								image={btnReset}
								type={"special"}
								onClick={handleRestart}
							/>
						</div>
					</div>
				)}

				<div className="chinese-chess__game--left--contain">
					<Board pvp={pvp} setLoss={setLoss} aiLevel={aiLevel} />
				</div>

				<div className="chinese-chess__game--left--controller">
					{menu && (
						<div className="chinese-chess__game--left--controller--menu">
							<div className="title">
								<h2>Cài Đặt</h2>
								<img
									src={btnClose}
									alt="Close"
									onClick={() => setMenu(false)}
								/>
							</div>

							<ul className="list">
								<li onClick={handleReturnHome}>
									<img src={btnHome} alt="home" />
									<p>Về trang chủ</p>
								</li>

								{!pvp && (
									<li>
										<img src={cardAI} alt="difficult" />
										<p>Độ khó AI</p>

										<ul className="sub-list">
											<li
												onClick={() =>
													handleChangeDiffs(2)
												}
											>
												Dễ
											</li>

											<li
												onClick={() =>
													handleChangeDiffs(3)
												}
											>
												Trung bình
											</li>

											<li
												onClick={() =>
													handleChangeDiffs(4)
												}
											>
												Khó
											</li>

											<li
												onClick={() =>
													handleChangeDiffs(5)
												}
											>
												Khổ dâm
											</li>
										</ul>
									</li>
								)}
							</ul>
						</div>
					)}

					<Button
						text={"Settings"}
						image={btnSetting}
						onClick={handleSetting}
					/>
					<Button
						text={"Undo"}
						image={btnUndo}
						onClick={handleUndo}
					/>
					<Button
						text={"Restart"}
						image={btnReset}
						onClick={handleRestart}
					/>
					<Button
						text={"Resign"}
						image={btnResign}
						onClick={handleResign}
					/>
				</div>
			</div>

			<div className="chinese-chess__game--right">
				<div className="chinese-chess__game--right--header">
					{!pvp && (
						<div className="chinese-chess__game--right--header--profile">
							<p>AI (Level {aiLevel - 1})</p>
							<img src={aiAvatar} alt="AI" />
						</div>
					)}
				</div>

				<div className="chinese-chess__game--right--contain">
					<BackStack />
				</div>

				<div className="chinese-chess__game--right--controller">
					<Button image={btnArrowFirst} onClick={handleFirstMove} />
					<Button image={btnArrowLeft} onClick={handleBeforeMove} />
					<Button image={btnArrowRight} onClick={handleAfterMove} />
					<Button image={btnArrowLast} onClick={handleLastMove} />
				</div>

				<div className="chinese-chess__game--right--footer"></div>
			</div>
		</div>
	);
};

export default Game;
