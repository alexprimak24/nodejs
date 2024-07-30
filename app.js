const fs = require("fs");

//readfile works async
fs.readFile("./test.txt", (error, data) => {
  fs.mkdir("./files", () => {
    fs.writeFile("./files/test2.txt", `${data} in copy test2`, () => {});
  });
});

//once we read file
fs.readFile("./test.txt", (error, data) => {
  //we then move and try to create a directory
  fs.mkdir("./files", () => {
    //once directory is created we now more and try to create text file there
    fs.writeFile("./files/test2.txt", `${data} in copy test2`, () => {});
  });
});

//they are making these commands Syncronous, but better to use Async, expecially if we have a lot of operations
// fs.readFileSync;
// fs.writeFileSync;

//existsSync - checks if the file/folder exist
setTimeout(() => {
  //once directory is created we now more and try to create text file there
  if (fs.existsSync("./files/test2.txt")) {
    fs.unlink("./files/test2.txt", () => {
      fs.existsSync("./files1")
        ? fs.rmdir("./files1", () => {})
        : console.log("nothing to delete");
    });
  } else {
    console.log("there is no folder exist that you are trying to delete");
  }
}, 4000);
