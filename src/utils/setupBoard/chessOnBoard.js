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

const chessOnBoard = [
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

export default chessOnBoard;
