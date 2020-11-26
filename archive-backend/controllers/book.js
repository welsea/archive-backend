//book_list
var booksModel = require('../model/books');

/* GET books listing. */
const booksController = {
    all(req, res) {
        booksModel.find({}).sort({ _id:-1})
            .exec((err, books) => res.json(books))
    },
    find(req, res){
        const keyword=req.query.kw;
        booksModel.find({title:{ $regex: '.*' + keyword + '.*' } }).sort({ _id:-1})
            .exec((err, books) => res.json(books))
    },
    byId(req,res){
        const id=req.query.id;
        booksModel.findOne({_id:id})
            .exec((err, book) => res.json(book))
    },
    limitReturn(req,res){
        booksModel
            .find({}).sort({_id:-1}).limit(10)
            .exec((err,books)=>res.json(books));
    },
    create(req, res) {
        const requestBody = req.body;
        const newBook = new booksModel(requestBody);

        newFic.save((err, saved) => {
            booksModel
                .findOne({
                    _id: newBook._id
                })
                .exec((err, book) => res.json(book))
        })
    },
    update(req, res) {
        // const idQuery = req.query.id;
        let book= req.body;

        booksModel.updateOne({
            _id: book._id
        }, {
            ...book
        }, (err, updated) => {
            res.json(updated);
        })
    },
    remove(req, res) {
        const idquery = req.query.id;

        booksModel.findOne({
            _id: idquery
        }).remove((err, removed) => res.json(idquery))
    }
}

module.exports = booksController;