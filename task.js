const fs = require('fs');

try {
  let data1 = fs.readFileSync('userdata1.json', 'utf-8');
  let users1 = JSON.parse(data1);

  let data2 = fs.readFileSync('userdata2.json', 'utf-8');
  let users2 = JSON.parse(data2);

  let combinedUsers = [...users1, ...users2];

  fs.writeFileSync('userdata3.json', JSON.stringify(combinedUsers, null, 2));

  console.log("Combined data written to userdata3.json");
  console.log(combinedUsers);

} catch (err) {
  console.error("Error occurred:", err.message);
}
