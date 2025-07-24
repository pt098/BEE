const fs = require('fs');

let users = [
  {
    name: "Priyanshu",
    email: "priyanshuthakur271@gmail.com",
    address: "Chandigarh",
    password: "12345"
  },
  {
    name: "Aarav",
    email: "aarav.sharma01@gmail.com",
    address: "Delhi",
    password: "aarav@123"
  },
];

try {
  // Write to file
  let data = JSON.stringify(users, null, 2);
  fs.writeFileSync('demo1.txt', data);
  console.log("✅ Data saved to demo1.txt");
} catch (err) {
  console.error(" Error writing to file:", err.message);
}

try {
  // Read from file
  let fileData = fs.readFileSync('userdata1.json', 'utf-8');
  let usersFromFile = JSON.parse(fileData);

  console.log(" Data read from userdata1.json:");
  console.log(usersFromFile);

  console.log(" User 1 Name:", usersFromFile[0].name);
  console.log(" User 2 Email:", usersFromFile[1].email);

} catch (err) {
  console.error(" Error reading or parsing file:", err.message);
}
