const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('./config/database')

const toDoRouter = require('./routes/api/todo')
const toBuyRouter = require('./routes/api/tobuy')

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/todo', toDoRouter)
app.use('/api/tobuy', toBuyRouter)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
