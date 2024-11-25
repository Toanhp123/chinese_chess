import advisor from '../assets/img/chess/advisor.svg';
import elephant from '../assets/img/chess/elephant.svg';
import horse from '../assets/img/chess/horse.svg';
import king from '../assets/img/chess/king.svg';
import pawn from '../assets/img/chess/pawn.svg';
import rook from '../assets/img/chess/rook.svg';
import cannon from '../assets/img/chess/cannon.svg';

class chess {
    constructor(type, image) {
        this.type = type;
        this.image = image;
    }
}

const obj_a = new chess('a', advisor);

const obj_b = new chess('b', elephant);

const obj_n = new chess('n', horse);

const obj_k = new chess('k', king);

const obj_p = new chess('p', pawn);

const obj_r = new chess('r', rook);

const obj_c = new chess('c', cannon);

export { obj_a, obj_b, obj_n, obj_k, obj_p, obj_r, obj_c };
