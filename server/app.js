const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}))


app.get('/', function(req, res) {
    res.render(path.join(__dirname + '/../public/index.pug'));
});

app.get('/users', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/users.html'));
});



app.post('/users/create', function(req, res){
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000);
console.log('Almundo app and listening on port 3000');
