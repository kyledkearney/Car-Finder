    
const db = require ("../models")

module.exports = {
    findAll: (req, res) => {
    db.Book.find(req.query)
    .then((books) => res.json(books))
    .catch((error) => res.stattus(422).json(error));
    },
    findById: (req, res) => {
        db.Book.findById(req.params.id)
        .then((book) => res.json(book))
        .catch((error) => res.stattus(422).json(error));
    },
    create: (req, res) => {
        db.Book.create(req.body)
        .then((result) => res.json(result))
        .catch((error) => res.stattus(422).json(error));
    },
    update: (req, res) => {
        db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((result) => res.json(result))
        .catch((error) => res.status(422).json(error));
    },
    remove: (req, res) => {
        db.Book.findById(req.params.id)
        .then((book) => book.remove())
        .then((result) => res.json(result))
        .catch((error) => res.status(422).json(error));
    }
}