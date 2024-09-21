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
        this.type = type;
    }
}

const obj_ab = new chess('advisor', advisor, 'black', 'advisor');

const obj_eb = new chess('elephant', elephant, 'black', 'elephant');

const obj_hb = new chess('horse', horse, 'black', 'horse');

const obj_kb = new chess('king', king, 'black', 'king');

const obj_pb = new chess('pawn', pawn, 'black', 'pawn');

const obj_rb = new chess('rook', rook, 'black', 'rook');

const obj_cb = new chess('cannon', cannon, 'black', 'cannon');

const obj_ar = new chess('advisor', advisor, 'red', 'advisor');

const obj_er = new chess('elephant', elephant, 'red', 'elephant');

const obj_hr = new chess('horse', horse, 'red', 'horse');

const obj_kr = new chess('king', king, 'red', 'king');

const obj_pr = new chess('pawn', pawn, 'red', 'pawn');

const obj_rr = new chess('rook', rook, 'red', 'rook');

const obj_cr = new chess('cannon', cannon, 'red', 'cannon');

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
