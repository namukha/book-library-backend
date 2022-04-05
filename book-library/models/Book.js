const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: {
        type: String,
        required: [true, "Book name must be filled!"],
    },
    isbn: {
        type: Number,
        length: 10
    },
    author: {
        type: String,
        required: [true, "Book author must be filled!"]
    },
    pubdate: {
        type: Date,
        required: [true, "Published Date must be filled!"]
    },
    price: {
        type: Number,
    }
})

const Book = mongoose.model("book", BookSchema);

module.exports = Book;