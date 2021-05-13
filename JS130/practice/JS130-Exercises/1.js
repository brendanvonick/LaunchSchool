

function myBind(func, obj) {
  return () => {
    return func.apply(obj, arguments);
  }
}




let nums = {
  propA: 5,
  propB: 3,
  sum() {
    return this.propA + this.propB;
  }
}


function sumFunc() {
  return `${this.propA} + ${this.propB} is ${this.sum()}`;
}

let newSum = myBind(sumFunc, nums);

console.log(newSum());
