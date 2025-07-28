const fs = require('fs');

// Function to read a file and return a Promise
function myread(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, "utf-8", (err, data) => {
            if (err) {
                reject(err);  
            } else {
                resolve(data); 
            }
        });
    });
}

// Function to write to a file and return a Promise
function mywrite(filepath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, "utf-8", (err) => {
            if (err) {
                reject(err);  
            } else {
                resolve("File written successfully"); 
            }
        });
    });
}

module.exports = {
    myread,
    mywrite
};
