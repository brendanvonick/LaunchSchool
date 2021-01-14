const STAR = '*';
const SPACE = ' ';

function star(num) {

  let i = Math.floor(num / 2) - 1;
  let o = 0;

  for (let line = 1; line <= Math.floor(num / 2); line += 1) {
    console.log(`${SPACE.repeat(o)}${STAR}${SPACE.repeat(i)}${STAR}` +
                `${SPACE.repeat(i)}${STAR}${SPACE.repeat(o)}`);
    i -= 1;
    o += 1
  }

  console.log(`${STAR.repeat(num)}`);

  i = 0;
  o = Math.floor(num / 2) - 1;

  for (let line = 1; line <= Math.floor(num / 2); line += 1) {
    console.log(`${SPACE.repeat(o)}${STAR}${SPACE.repeat(i)}${STAR}` +
                `${SPACE.repeat(i)}${STAR}${SPACE.repeat(o)}`);
    i += 1;
    o -= 1
  }

}


star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
