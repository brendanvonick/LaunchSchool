//  Modify the makeList function so that it returns an object that provides the
//  interface shown above, including add, list, and remove methods.



function makeList() {
  return {
    items: [],
    add(item) {
      let index = this.items.indexOf(item);
      if (index === -1) {
        this.items.push(item);
        console.log(item + " added!");
      }
    },
    list() {
      if (this.items.length === 0) {
        console.log("The list is empty.");
      } else {
        this.items.forEach(function(item) {
          console.log(item);
        });
      }
    },
    remove(item) {
      let index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
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
