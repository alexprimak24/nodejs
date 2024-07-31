const http = require("http");

const PORT = 3000;

//in case we are doing some updates we have to manually restart the server to see changes
const server = http.createServer((req, res) => {
  console.log("Server request");
  console.log(req.url, req.method);
  //now we said that we sending text to our browser from the server
  // res.setHeader("Content-Type", "text/plain");
  // res.write("Hello world!");

  //now we said that we sending html to our browser from the server, so now it would understand our html tags
  // res.setHeader("Content-Type", "text/html");
  // res.write("<head><link rel='stylesheet' href='#'></head>"); //even now we can connects css
  // res.write("<h2>Hello world!</h2>");
  // res.write("<h1>Hello david!</h1>");

  //so we emulated the work with API as we send a JSON response from the server to our browser
  res.setHeader("Content-Type", "application/json");
  const data = JSON.stringify([
    { name: "Tommy", age: 35 },
    { name: "Arthur", age: 40 },
  ]);
  res.end(data);
  //end method signals that all requests have been sent
  // res.end();
});

server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening to port ${PORT}`);
});
