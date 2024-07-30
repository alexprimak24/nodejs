//in log.js we are calling the events that we pasted in app.js

const EventEmmiter = require("events");

//created classs which is copy of EventEmitter so now we are able to call it from other places
class Logger extends EventEmmiter {
  log = (msg) => {
    console.log(msg);
    //call an event that we created
    // some_event - name of event, Event test text - data that we log
    this.emit("some_event", { id: 1, text: "Event test text" });
  };
}

module.exports = Logger;
