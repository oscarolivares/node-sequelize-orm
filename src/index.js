const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(bodyParser.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
  res.send('Ready');
});

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});
