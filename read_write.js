const { myread, mywrite } = require('./io.js'); 

async function task() {
    try {
        let data1 = await myread("./userdata1.json");
        let data2 = await myread("./userdata2.json");

        let arr1 = JSON.parse(data1);
        let arr2 = JSON.parse(data2);

        let res = [...arr1, ...arr2];

        let message = await mywrite("./userdata3.json", JSON.stringify(res, null, 2));
        console.log(message);
    } catch (error) {
        console.log(error);
    }
}

task();

console.log("hi");
