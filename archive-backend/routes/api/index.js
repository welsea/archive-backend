const express = require('express');
const router = express.Router();
const rrecordController = require('../../controllers/rrecord');
const bookController = require('../../controllers/book');




//rrecord
router.get('/read_records', rrecordController.all);
router.get('/read_records/limit',rrecordController.limitReturn);
router.get('/read_records/find',rrecordController.find);
router.get('/read_record', rrecordController.byId);
router.post('/read_record/add', rrecordController.create);
router.put('/read_record/update', rrecordController.update);
router.delete('/read_record/delete', rrecordController.remove);

//book_list
router.get('/books', bookController.all);
router.get('/books/limit',bookController.limitReturn);
router.get('/books/find',bookController.find);
router.get('/book', bookController.byId);
router.post('/book/add', bookController.create);
router.put('/book/update', bookController.update);
router.delete('/book/delete', bookController.remove);

module.exports = router;