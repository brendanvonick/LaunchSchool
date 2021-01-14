function isBlockWord(string) {
  let blocks = {B:'O', X:'K', D:'Q', C:'P', N:'A', G:'T', R:'E', F:'S', J:'W',
                H:'U', V:'I', L:'Y', Z:'M' };
  let charArr = string.toUpperCase().split('');

  let entries = {};
  let keys = Object.keys(blocks);
  let values = Object.values(blocks);
  let result = true;

  charArr.forEach(element => {
    entries = Object.entries(blocks);
    keys = Object.keys(blocks);
    values = Object.values(blocks);
    if (!keys.includes(element) && !values.includes(element)) {
      result = false;
    }

    for (let index = 0; index < entries.length; index += 1) {
      if (entries[index][0] === element || entries[index][1] === element) {
        delete blocks[entries[index][0]];
        continue;
      }
    }
  });

  return result;
}



isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
