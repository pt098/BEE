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
// index.js
const fs = require('fs');
const prompt = require('prompt-sync')();

// Get user input
const name = prompt('Enter name: ');
const email = prompt('Enter email: ');
const age = prompt('Enter age: ');

// Create student object
const student = {
  name,
  email,
  age: Number(age),
};

// Save to JSON file
fs.writeFileSync('student.txt', JSON.stringify(student, null, 2));
console.log('Data saved to student.json');

// Read and display the data
const data = fs.readFileSync('student.json', 'utf8');       
const savedStudent = JSON.parse(data);

console.log('\n Saved Student Data:');
console.log(`Name: ${savedStudent.name}`);
console.log(`Email: ${savedStudent.email}`);
console.log(`Age: ${savedStudent.age}`);
