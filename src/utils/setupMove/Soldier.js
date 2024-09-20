import chessOnBoard from '../setupBoard/chessOnBoard';

const isSoldierMoveValid = (fromRow, fromCol, toRow, toCol) => {
    // Quân tốt di chuyển thẳng
    if (fromCol !== toCol) return false;

    return true;
};

export default isSoldierMoveValid;
