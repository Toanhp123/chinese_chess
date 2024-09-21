import ba from '../assets/img/ba.gif';
import bb from '../assets/img/bb.gif';
import bc from '../assets/img/bc.gif';
import bk from '../assets/img/bk.gif';
import bkm from '../assets/img/bkm.gif';
import bn from '../assets/img/bn.gif';
import board from '../assets/img/board.jpg';
import bp from '../assets/img/bp.gif';
import br from '../assets/img/br.gif';
import oo from '../assets/img/oo.gif';
import oos from '../assets/img/oos.gif';
import ra from '../assets/img/ra.gif';
import rb from '../assets/img/rb.gif';
import rc from '../assets/img/rc.gif';
import rk from '../assets/img/rk.gif';
import rkm from '../assets/img/rkm.gif';
import rn from '../assets/img/rn.gif';
import rp from '../assets/img/rp.gif';
import rr from '../assets/img/rr.gif';
import thinking from '../assets/img/thinking.gif';

class chess {
    constructor(image, color, name, type) {
        this.image = image;
        this.color = color;
        this.name = name;
        this.type = type;
    }
}

const obj_ba = new chess(ba, 'black', 'sĩ', 'Advisor');

const obj_bb = new chess(bb, 'black', 'tịnh', 'Elephant');

const obj_bc = new chess(bc, 'black', 'pháo', 'Cannon');

const obj_bk = new chess(bk, 'black', 'tướng', 'King');

const obj_bkm = new chess(bkm, 'black', 'tướng thua');

const obj_bn = new chess(bn, 'black', 'mã', 'Horse');

const obj_board = new chess(board, null, null);

const obj_bp = new chess(bp, 'black', 'tốt', 'Solder');

const obj_br = new chess(br, 'black', 'xe', 'Rook');

const obj_oo = new chess(oo, null, null);

const obj_oos = new chess(oos, null, null);

const obj_ra = new chess(ra, 'red', 'sĩ', 'Advisor');

const obj_rb = new chess(rb, 'red', 'tịnh', 'Elephant');

const obj_rc = new chess(rc, 'red', 'pháo', 'Cannon');

const obj_rk = new chess(rk, 'red', 'tướng', 'King');

const obj_rkm = new chess(rkm, 'red', 'tướng thua');

const obj_rn = new chess(rn, 'red', 'mã', 'Horse');

const obj_rp = new chess(rp, 'red', 'tốt', 'Solder');

const obj_rr = new chess(rr, 'red', 'xe', 'Rook');

const obj_thinking = new chess(thinking, null, null);

export {
    obj_ba,
    obj_bb,
    obj_bc,
    obj_bk,
    obj_bkm,
    obj_bn,
    obj_board,
    obj_bp,
    obj_br,
    obj_oo,
    obj_oos,
    obj_ra,
    obj_rb,
    obj_rc,
    obj_rk,
    obj_rkm,
    obj_rn,
    obj_rp,
    obj_rr,
    obj_thinking,
};
