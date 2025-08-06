const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // for form data

app.post('/register', (req, res) => {
  const { username, email } = req.body;

  const newUser = {
    username,
    email,
    registeredAt: new Date().toISOString()
  };

  // Save to file
  const filePath = path.join(__dirname, 'users.json');

  // Read existing users
  let users = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    users = JSON.parse(data || '[]');
  }

  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  res.send(`<h2>Registration successful!</h2><a href="/">Go back</a>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
