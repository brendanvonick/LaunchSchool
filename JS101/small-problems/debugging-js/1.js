let ladder = '';

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail

// They did not add semi-colons in their program, which tells the javascript when
// a line is complete (explicitly terminates a statement or expression). The
// error occurs from not adding it to the intial 'ladder' variable creation.
