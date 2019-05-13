const axios = require("axios");
const db = require("../models");

const ajax = axios.create({
    headers: {
        "Content-type": "application/json"
    }
});

module.exports = {
    findAll: async (req, res) => {
        const { query: params} = req;
        try {
            const results = await ajax.get(
                'https://www.googleapis.com/books/v1/volumes',
                { params }
            );
            const apiBooks = results.data.items.filter(
                (result) =>
                    result.volumeInfo.title &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.description &&
                    result.volumeInfo.imageLinks &&
                    result.volumeInfo.imageLinks.thumbnail
            );

            const dbBooks = await db.Book.find();

            const books = apiBooks.filter((apiBooks) =>
                dbBooks.every((dbBook) => dbBook.googleId.toString() !== apiBooks.id)
            );
            return res.json(books);
        } catch (error) {
            return res.status(422).json(error);
        }
    }
};