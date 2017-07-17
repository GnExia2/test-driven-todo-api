var mongoose = require('mongoose');
mongoose.connect(process.env.DBPORT || 'mongodb://localhost/todo-app');

module.exports = {
  Todo: require('./todo')
}
