//read_record=rrcord
var rrecordModel = require('../model/rrecord');

/* GET rrecord listing. */
const rrecordController = {
    all(req, res) {
        rrecordModel.find({}).sort({ _id:-1})
            .exec((err, rrecord) => res.json(rrecord))
    },
    find(req, res){
        const keyword=req.query.kw;
        rrecordModel.find({title:{ $regex: '.*' + keyword + '.*' } }).sort({ _id:-1})
            .exec((err, rrecord) => res.json(rrecord))
    },
    byId(req,res){
        const id=req.query.id;
        rrecordModel.findOne({_id:id})
            .exec((err, record) => res.json(record))
    },
    limitReturn(req,res){
        rrecordModel
            .find({}).sort({_id:-1}).limit(10)
            .exec((err,rrecord)=>res.json(rrecord));
    },
    create(req, res) {
        const requestBody = req.body;
        const newRecord = new rrecordModel(requestBody);

        newFic.save((err, saved) => {
            rrecordModel
                .findOne({
                    _id: newRecord._id
                })
                .exec((err, record) => res.json(record))
        })
    },
    update(req, res) {
        // const idQuery = req.query.id;
        let record= req.body;

        rrecordModel.updateOne({
            _id: record._id
        }, {
            ...record
        }, (err, updated) => {
            res.json(updated);
        })
    },
    remove(req, res) {
        const idquery = req.query.id;

        rrecordModel.findOne({
            _id: idquery
        }).remove((err, removed) => res.json(idquery))
    }
}

module.exports = rrecordController;