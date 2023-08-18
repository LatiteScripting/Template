namespace hf {
    const fs = require("filesystem");
    const net = require("network");

    // creates a directory inside the script folder
    fs.createDirectorySync("ScriptDir");

    // gets the HTML/data of latiteclient.github.io
    net.get("https://latiteclient.github.io/", {} /*we won't send any data*/, (err, resp) => {
        if (resp.error) {
            // internal error
            script.log(TextColor.RED + resp.error);
        } else {
            if (err == 200 /*OK*/) {
                // write the HTML to ScriptDir\dump.html
                fs.write("ScriptDir/dump.html", resp.body /*the data we got from the website*/, (er) => {
                    if (er != 200) {
                        script.log(TextColor.YELLOW + "Filesystem Errorcode: " + er);
                    }
                })
            } else {
                script.log(TextColor.YELLOW + "HTTP Error: " + err);
            }
        }
    });
}