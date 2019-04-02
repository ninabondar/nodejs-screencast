const util = require("util");

const str = util.format(
  "hi %s. You are %d years old. You can: %j",
  "Nina",
  20,
  { actions: ["swim", "read", "code"] }
);

console.log(str);
