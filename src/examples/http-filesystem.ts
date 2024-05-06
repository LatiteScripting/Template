const fs = require("filesystem");
const net = require("http");

// creates a directory inside the script folder
fs.createDirectory("ScriptDir");

// gets the HTML/data of example.com
net.getAsync("https://example.com/", {} /*don't send any data*/, (resp) => {
  if (resp.error) {
    // internal error
    clientMessage(TextColor.RED + resp.error);
  } else {
    if (resp.statusCode == 200 /*OK*/) {
      // write the HTML to ScriptDir\dump.html
      fs.writeAsync(
        "ScriptDir/dump.html",
        resp.body /*the data we got from the website*/,
        (er) => {
          clientMessage(TextColor.YELLOW + "Filesystem Errorcode: " + er);
        }
      );
    } else {
      clientMessage(TextColor.YELLOW + "HTTP Error: " + resp.statusCode);
    }
  }
});
