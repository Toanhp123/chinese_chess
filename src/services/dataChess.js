import advisor from '../assets/img/chess/advisor.svg';
import elephant from '../assets/img/chess/elephant.svg';
import horse from '../assets/img/chess/horse.svg';
import king from '../assets/img/chess/king.svg';
import pawn from '../assets/img/chess/pawn.svg';
import rook from '../assets/img/chess/rook.svg';
import cannon from '../assets/img/chess/cannon.svg';

class Chess {
    constructor(type, image) {
        this.type = type;
        this.image = image;
    }
}

const obj_a = new Chess('a', advisor);
const obj_b = new Chess('b', elephant);
const obj_n = new Chess('n', horse);
const obj_k = new Chess('k', king);
const obj_p = new Chess('p', pawn);
const obj_r = new Chess('r', rook);
const obj_c = new Chess('c', cannon);

export { obj_a, obj_b, obj_n, obj_k, obj_p, obj_r, obj_c };
