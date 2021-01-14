function triangle(num) {
  let space = ' ';
  let star = '*';
  let starCount = 1;
  let spaceCount = num - 1;
  for (let rows = 1; rows <= num; rows += 1) {
    console.log(`${space.repeat(spaceCount)}${star.repeat(starCount)}`);
    starCount += 1;
    spaceCount -= 1;
  }
}




triangle(5);
/*
    *
   **
  ***
 ****
*****
*/

triangle(9);
/*
        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/
