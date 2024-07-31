const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Server request");

  res.setHeader("Content-Type", "text/html");

  const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

  let basePath = "";

  switch (req.url) {
    //in case user sends any of these values
    //it will be redirected to the main page
    case "/":
    case "/home":
    case "/index.html":
      basePath = createPath("index");
      res.statusCode = 200;
    //it is when we had an old route, and now it changed, so the user will be redirected to the new route
    case "/aboutus":
      res.statusCode = 301;
      res.setHeader("Location", "/contacts");
      res.end();
      break;
    case "/contacts":
      basePath = createPath("contacts");
      res.statusCode = 200;
    //if the user entered the wrong path
    default:
      basePath = createPath("error");
      //page not found
      res.statusCode = 404;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      //server error means like the page are u looking for not found
      res.statusCode = 500;
      //here is also res.end() as we need end our response
      //to give a response to the browser
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
