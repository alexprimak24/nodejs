//buffer is needed to transmit the data by parts, as storing like huge youtube video in the browser is insane
//so we are using buffer to send the data by parts, and Stream us a stream if parts we are sending

//there are 4 types of streams:
// Readable
// Writable
// Duplex - read+write
// Transform - Duples + allows to edit the data we read or write

const fs = require("fs");
const zlib = require("zlib");

// Readable
const readStream = fs.createReadStream("./docs/text.txt");

// Writable
const writeStream = fs.createWriteStream("./docs/new-text.txt");

// Transform - great example is compression
const compressStream = zlib.createGzip();

// Duplex - read+write
//this is long method
// //reading text.txt by chunks
// readStream.on("data", (chunk) => {
//   //now we are writing chunks to the new file
//   writeStream.write("\n---CHUNK START---\n");
//   writeStream.write(chunk);
// });

const handleError = () => {
  console.log("error");
  //in case we receive an error we destroy current stream as we don't want to receive broken data
  readStream.destroy();
  writeStream.end("Finished with error...");
};

// Duplex - read+write
//first ON listens to read errors
//second ON listens to write errors
// readStream.on("error", handleError).pipe(writeStream).on("error", handleError);

//we are also compressing the data here
readStream
  .on("error", handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on("error", handleError);
