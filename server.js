//THE SAME FUNCTIONALITY AS IN APP.JS but with EXPRESS
const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
const PORT = 3000;

const createPath = (page) =>
  path.resolve(__dirname, "ejs-views", `${page}.ejs`);

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

//thanks to express it automatically sets content type we are sending
app.get("/", (req, res) => {
  const title = "Home";
  res.render(createPath("index"), { title });
});

app.get("/contacts", (req, res) => {
  const title = "Contacts";
  const contacts = [
    { name: "youtube", link: "https://www.youtube.com" },
    { name: "youtube", link: "https://www.youtube.com" },
    { name: "youtube", link: "https://www.youtube.com" },
  ];
  res.render(createPath("contacts"), { contacts, title });
});
//redirect to an updated route
app.get("/about-us", (req, res) => {
  const title = "Contacts";
  res.render(createPath("/contacts"), { title });
});

app.get("/posts/:id", (req, res) => {
  const title = "Post";
  res.render(createPath("post"), { title });
});

app.get("/posts", (req, res) => {
  const title = "Posts";
  res.render(createPath("posts"), { title });
});

app.get("/add-post", (req, res) => {
  const title = "AddPost";
  res.render(createPath("add-post"), { title });
});

//it is a middleware
app.use((req, res) => {
  const title = "ErrorPage";
  // res.statusCode = 404; we can just use status
  res.status(404).render(createPath("error"), { title });
});
