const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;
//schema
var bookSchema= new mongoose.Schema({
    title:String,
    author:String,
    date:Date,
    record_num:Number,
    // book: { type: ObjectId, ref: 'Book' }
})

var bookModel= mongoose.model('book', bookSchema);
module.exports=bookModel;