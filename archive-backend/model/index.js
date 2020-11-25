const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
const ObjectId = mongoose.Schema.Types.ObjectId;

const recordSchema = Schema({
  id: ObjectId,
  title: String,
  date:Date,
  content:String,
  book: { type: ObjectId, ref: 'Book' }
});

const bookSchema = Schema({
  id: ObjectId,
  name: String,
});

const Record = model('Record', recordSchema);
const Book = model('Book', bookSchema);

module.exports = { Record, Book};

