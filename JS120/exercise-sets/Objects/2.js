// A grocery store uses a JavaScript function to calculate discounts on
// various items. They are testing out various percentage discounts but are
// getting unexpected results. Go over the code, and identify the reason why
// they aren't getting the expected discounted prices from the function. Then,
// modify the code so that it produces the correct results.

// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function(percent) {
//     let discount = this.price * percent / 100;
//     this.price -= discount;
//
//     return this.price;
//   },
// };
//
// item.discount(20)   // should return 40
// // = 40
// item.discount(50)   // should return 25
// // = 20
// item.discount(25)   // should return 37.5
// // = 15

// The issue here is that the price property on item is altered every time the
// discount method is run. When it is called once, the correct price is
// returned, but any subsequent calls will have the initial price the discount
// works on be the already discounted price from the previous call. The item
// object is being mutated. To fix this, see the code below.

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    let discountPrice = this.price - discount;

    return discountPrice;
  },
};

item.discount(20)   // should return 40
// = 40
item.discount(50)   // should return 25
// = 25
item.discount(25)   // should return 37.5
// = 37.5
