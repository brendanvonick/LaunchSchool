//  1.
// let book1 = {
//   title: 'Mythos',
//   author: 'Stephen Fry',
//   getDescription: function() {
//     return `${this.title} was written by ${this.author}.`;
//   },
// };
//
// let book2 = {
//   title: 'Me Talk Pretty One Day',
//   author: 'David Sedaris',
//   getDescription: function() {
//     return `${this.title} was written by ${this.author}.`;
//   },
// };
//
// let book3 = {
//   title: "Aunts aren't Gentlemen",
//   author: 'PG Wodehouse',
//   getDescription: function() {
//     return `${this.title} was written by ${this.author}.`;
//   },
// };

//  2. Yes, as we just learned we can use object factories to create these
//  objects without having to specifically set each property/value. The method
//  of the object is repeated in each object.

//  3-7

function createBook(title, author, read = false) {
  return {
    title,
    author,
    read,

    getDescription() {
      return `${this.title} was written by ${this.author}. ` +
             `I ${this.read ? 'have': 'haven\'t'} read it.`
    },

    readBook() {
      this.read = true;
    }
  }
}

let book1 = createBook('Mythos', 'Stephen Fry');
book1.readBook();
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook('Aunts aren\'t Gentlemen', 'PG Wodehouse');

book1.getDescription();  // "Mythos was written by Stephen Fry."
book2.getDescription();  // "Me Talk Pretty One Day was written by David Sedaris."
book3.getDescription();  // "Aunts aren't Gentlemen was written by PG Wodehouse"
