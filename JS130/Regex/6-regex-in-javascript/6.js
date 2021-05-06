// Challenge: write a method that changes dates in the format 2016-06-17 to the
// format 17.06.2016. You must use a regular expression and should use methods
// described in this section.

'use strict';


function formatDate(date) {
  return date.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, `$3.$2.$1`);
}


console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)
