const Logger = require("./log");
const logger = new Logger();

//In app.js we described events that we listen to

//some_event - name of action that we are goint to listen to
//here we described what we are going to do with out event and how it is called (some_event)
logger.on("some_event", (args) => {
  const { id, text } = args;
  console.log(id, text);
});

//here we logged an output of our request
logger.log("user logged");
