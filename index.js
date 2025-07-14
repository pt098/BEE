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
