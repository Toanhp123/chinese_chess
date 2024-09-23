import {
    obj_ab,
    obj_eb,
    obj_hb,
    obj_kb,
    obj_pb,
    obj_rb,
    obj_cb,
    obj_ar,
    obj_er,
    obj_hr,
    obj_kr,
    obj_pr,
    obj_rr,
    obj_cr,
} from '../../services/dataChess';

const renderBoard = [
    [obj_rb, obj_hb, obj_eb, obj_ab, obj_kb, obj_ab, obj_eb, obj_hb, obj_rb],
    ['', '', '', '', '', '', '', '', ''],
    ['', obj_cb, '', '', '', '', '', obj_cb, ''],
    [obj_pb, '', obj_pb, '', obj_pb, '', obj_pb, '', obj_pb],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    [obj_pr, '', obj_pr, '', obj_pr, '', obj_pr, '', obj_pr],
    ['', obj_cr, '', '', '', '', '', obj_cr, ''],
    ['', '', '', '', '', '', '', '', ''],
    [obj_rr, obj_hr, obj_er, obj_ar, obj_kr, obj_ar, obj_er, obj_hr, obj_rr],
];

export const coordinatesY = ['J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A'];

export const coordinatesX = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const reRenderBoard = (
    board,
    setBoard,
    fromRow,
    fromCol,
    toRow,
    toCol,
) => {
    // Tạo bản sao bàn cờ
    const newBoard = [...board];

    // Lấy quân cờ từ vị trí cũ
    const movingPiece = newBoard[fromRow][fromCol];

    // Xóa quân cờ ở vị trí cũ
    newBoard[fromRow][fromCol] = '';

    // Đặt quân cờ vào vị trí mới
    newBoard[toRow][toCol] = movingPiece;

    // Cập nhật lại bàn cờ và xóa các lựa chọn
    setBoard(newBoard);
};

export default renderBoard;
