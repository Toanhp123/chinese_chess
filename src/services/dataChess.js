import advisor from '../assets/img/chess/advisor.svg';
import elephant from '../assets/img/chess/elephant.svg';
import horse from '../assets/img/chess/horse.svg';
import king from '../assets/img/chess/king.svg';
import pawn from '../assets/img/chess/pawn.svg';
import rook from '../assets/img/chess/rook.svg';
import cannon from '../assets/img/chess/cannon.svg';

class chess {
    constructor(name, image, color, type) {
        this.name = name;
        this.image = image;
        this.color = color;
    }
}

const obj_ab = new chess('advisor', advisor, 'black');

const obj_eb = new chess('elephant', elephant, 'black');

const obj_hb = new chess('horse', horse, 'black');

const obj_kb = new chess('king', king, 'black');

const obj_pb = new chess('pawn', pawn, 'black');

const obj_rb = new chess('rook', rook, 'black');

const obj_cb = new chess('cannon', cannon, 'black');

const obj_ar = new chess('advisor', advisor, 'red');

const obj_er = new chess('elephant', elephant, 'red');

const obj_hr = new chess('horse', horse, 'red');

const obj_kr = new chess('king', king, 'red');

const obj_pr = new chess('pawn', pawn, 'red');

const obj_rr = new chess('rook', rook, 'red');

const obj_cr = new chess('cannon', cannon, 'red');

export {
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
};
