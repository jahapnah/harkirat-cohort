const fs = require("fs");
const path = require("path");

const actualpath = path.join(__dirname,"02-nodejs", "files");
console.log(actualpath);

fs.readdir(actualpath, (err, files) => {
    if(err){
        console.error(err);
    }
    else{
        console.log("Files are : ", files);
    }
}); 