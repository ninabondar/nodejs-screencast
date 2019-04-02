const util = require("util");

const obj = {
  a: 4,
  b: 9,
  inspect: () => {
    return "hello";
  }
};

obj.self = obj;

console.log(util.inspect(obj));
