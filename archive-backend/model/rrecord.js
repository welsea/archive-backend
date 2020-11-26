const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;
//schema
var rrecordSchema= new mongoose.Schema({
    book_title:String,
    title:String,
    content:String,
    date:Date,
    user:String,
    book: { type: ObjectId, ref: 'Book' }
})

var rrecordModel= mongoose.model('rrecord', rrecordSchema);
module.exports=rrecordModel;