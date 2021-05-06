//  Notice that our solution to the previous problem lets us access the array
//  of items through the items property:

// > list.items  // items is accessible from outside the object
// ['corn']       // since it is an object property

//  That wasn't the case in the single-function implementation:

// > list.items;  // items isn't accessible from outside the function
// undefined      // since it is within a closure.

//  Update the implementation from problem 1 so that it retains the use of an
//  object with methods but prevents outside access to the items the object
//  stores internally.

function makeList() {
  let items = [];

  return {
    add(item) {
      let index = items.indexOf(item);
      if (index === -1) {
        items.push(item);
        console.log(item + " added!");
      }
    },
    list() {
      if (items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach(function(item) {
          console.log(item);
        });
      }
    },
    remove(item) {
      let index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(item + " removed!");
      }
    }
  };
}

let list = makeList();
list.add("peas");
//  peas added!

list.list();
//  peas

list.add("corn");
//  corn added!

list.list();
//  peas
//  corn

list.remove("peas");
//  peas removed!

list.list();
//  corn
