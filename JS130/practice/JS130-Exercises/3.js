

function makeStack() {
  let stack = [];

  return {
    push(val) {
      stack.push(val);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      let str = '';
      stack.forEach(element => {
        str = str.concat(`${element}\n`);
      });

      console.log(str);
    },
  }
}

let stack = makeStack();

stack.push('element');
stack.push('another element');
stack.push(3);

stack.printStack();
stack.pop();
stack.printStack();
