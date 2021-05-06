// Behold this incomplete class for constructing boxed banners.

// class Banner {
//   constructor(message) {
//   }
//
//   displayBanner() {
//     console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(),
//                  this.emptyLine(), this.horizontalRule()].join("\n"));
//   }
//
//   horizontalRule() {}
//
//   emptyLine() {}
//
//   messageLine() {
//     return `| ${this.message} |`
//   }
// }

// Complete this class so that the test cases shown below work as intended.
// You are free to add any properties you need.
//
// You may assume that the input will always fit in your terminal window.
//
// Test Cases


class Banner {
  constructor(message) {
    this.message = message;
    this.repeatLength = message.length;
    this.empty = ' ';
    this.horizontal = '-';
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(),
                 this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+-${this.horizontal.repeat(this.repeatLength)}-+`;
  }

  emptyLine() {
    return `| ${this.empty.repeat(this.repeatLength)} |`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+


let banner2 = new Banner('');
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+
