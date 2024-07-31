//THE SAME FUNCTIONALITY AS IN APP.JS but with EXPRESS
const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

//thanks to express it automatically sets content type we are sending
app.get("/", (req, res) => {
  res.sendFile(createPath("index"));
});

app.get("/contacts", (req, res) => {
  res.sendFile(createPath("contacts"));
});
//redirect to an updated route
app.get("/about-us", (req, res) => {
  res.redirect(createPath("/contacts"));
});

//it is a middleware
app.use((req, res) => {
  // res.statusCode = 404; we can just use status
  res.status(404).sendFile(createPath("error"));
});
