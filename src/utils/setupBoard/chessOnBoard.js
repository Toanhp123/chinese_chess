import {
    obj_ba,
    obj_bb,
    obj_bc,
    obj_bk,
    obj_bn,
    obj_bp,
    obj_br,
    obj_ra,
    obj_rb,
    obj_rc,
    obj_rk,
    obj_rn,
    obj_rp,
    obj_rr,
} from '../../services/dataChess';

const chessOnBoard = [
    [obj_br, obj_bn, obj_bb, obj_ba, obj_bk, obj_ba, obj_bb, obj_bn, obj_br],
    ['', '', '', '', '', '', '', '', ''],
    ['', obj_bc, '', '', '', '', '', obj_bc, ''],
    [obj_bp, '', obj_bp, '', obj_bp, '', obj_bp, '', obj_bp],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    [obj_rp, '', obj_rp, '', obj_rp, '', obj_rp, '', obj_rp],
    ['', obj_rc, '', '', '', '', '', obj_rc, ''],
    ['', '', '', '', '', '', '', '', ''],
    [obj_rr, obj_rn, obj_rb, obj_ra, obj_rk, obj_ra, obj_rb, obj_rn, obj_rr],
];

export default chessOnBoard;
