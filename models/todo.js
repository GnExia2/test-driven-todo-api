var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TodoSchema = new Schema ({
  task: "String",
  desciption:"String"
});

var Todo = mongoose.model("Todo", TodoSchema);

module.export = Todo;
