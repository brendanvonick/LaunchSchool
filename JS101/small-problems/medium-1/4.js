function compute(commands, register, stack) {
  commands.forEach(element => {
    if (Number.isInteger(element)) {
      register = element;
    }

    switch (element) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register = register + stack.pop();
        break;
      case 'SUB':
        register = register - stack.pop();
        break;
      case 'MULT':
        register = register * stack.pop();
        break;
      case 'DIV':
        register = (register / stack.pop()).toFixed(0);
        break;
      case 'MOD':
        register = register % stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
    }
  });
}

function minilang(string) {
  let stack = [];
  let register = 0;

  let commands = string.split(' ');

  for (let index = 0; index < commands.length; index += 1) {
    let element = Number(commands[index]);
    if (Number.isInteger(element)) {
      commands[index] = element;
    }
  }

  compute(commands, register, stack);
}



minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
