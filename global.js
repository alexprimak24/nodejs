//Global objects

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// console.log(__dirname); //list current directory

// console.log(__filename); //path+filename

// console.log(process.env);

const url = new URL("https://docs.fuel.network/guides/");
console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);
