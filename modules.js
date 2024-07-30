const os = require("os");
const { username: userName, sayHi } = require("./test");

const name = "Alex";

console.log(sayHi(name));
console.log(userName);

console.log(os.platform(), os.release());
