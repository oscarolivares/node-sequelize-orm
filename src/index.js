const express = require('express');
const bodyParser = require('body-parser');
const User = require('./database');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
  res.send('<a href="/users">Users</a>');
});

app.get('/users', (req, res) => {
  User.findAll().then(users => {
    console.log('All users:', JSON.stringify(users, null, 4));
    res.send(JSON.stringify(users, null, 4));
  });
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
