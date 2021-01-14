function logInBox(string) {
  let boxLength = string.length + 4;
  console.log(`+${'-'.repeat(boxLength - 2)}+`);
  console.log(`|${' '.repeat(boxLength - 2)}|`);
  console.log(`| ${string} |`);
  console.log(`|${' '.repeat(boxLength - 2)}|`);
  console.log(`+${'-'.repeat(boxLength - 2)}+`);
}

'what is this'.length;

logInBox('To boldly go where no one has gone before.');
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

logInBox('');
/*
+--+
|  |
|  |
|  |
+--+
*/
