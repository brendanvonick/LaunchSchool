// item creator, items manager, reports manager
// item creator: makes sure all necessary information are present and valid
// item manager: creates items, updates information about items, delegates items
//               and queries information about the items
// reports: creates report objects that generate reports for specific items.
//          Responsible for reports for all items.

// Requirements for an item:
// SKU code: first 3 letters of the item and first 2 letters of category.
//           if the item consists of 2 words and the first word is only 2 letters,
//           the next letter is taken from the next word.
// item name: name of the item. Minimum of 5 chracters spaces not counted
// Category: category the item belongs to. Minimum of 5 characters and can only
//           be 1 word.
// Quantity: quantity in stock of an item. must not be blank. assume valid number.


function itemCreator(itemName, category, quantity) {
  let invalidObj = { notValid: true };

  if (itemName.split(' ').join('').length < 5) {
    return invalidObj;
  } else if (!(category.match(/\b[a-z]{5,}$/i)) || category.match(/\s/)) {
    return invalidObj;
  } else if (quantity === undefined) {
    return invalidObj;
  }

  return {
    itemName,
    category,
    quantity,
    skuCode: (itemName.split(' ').join('').slice(0, 3) +
              category.slice(0, 2)).toUpperCase(),
  }
}


let ItemManager = (function() {
  return {
    items: [],

    create(itemName, category, quantity) {
      let item = itemCreator(itemName, category, quantity);
      if ('notValid' in item) {
        return item;
      } else {
        this.items.push(item);
      }
    },

    update(sku, update) {
      let item = this.items.filter(item => {
        return item.skuCode === sku;
      })[0];

      for (let prop in update) {
        item[prop] = update[prop];
      }
    },

    delete(sku) {
      let item = this.items.filter(item => {
        return item.skuCode === sku;
      })[0];

      let index = this.items.indexOf(item);

      this.items.splice(index, 1);
    },

    inStock() {
      return this.items.filter(item => {
        return item.quantity > 0;
      });
    },

    itemsInCategory(cat) {
      return this.items.filter(item => {
        return item.category === cat;
      });
    }

  }
})();

let ReportManager = (function() {

  return {
    init(itemMan) {
      this.items = itemMan;
    },

    reportInStock() {
      let itemsInStock = this.items.inStock();
      let itemNames = [];
      itemsInStock.forEach(item => {
        itemNames.push(item.itemName);
      });

      console.log(itemNames.join(', '));
    },

    createReporter(sku) {
      let reportItem = this.items.items.filter(item => {
        return item.skuCode === sku;
      })[0];

      return {
        itemInfo() {
          let infoStr = '';
          for (let prop in reportItem) {
            infoStr += `${prop}: ${reportItem[prop]}\n`;
          }

          console.log(infoStr);
        }
      };
    }
  }
})();




ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
