const { Xiangqi } = require('./lib/xiangqi/xiangqi');

const xiangqi = new Xiangqi();

console.log(xiangqi.turn());

console.log(xiangqi.moves());
