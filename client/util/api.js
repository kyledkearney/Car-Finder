import axios from "axios";

// axios instance for JSON data

const ajax = axios.create({
    headers: {
        "Content-type": "application/json"
    }
});

export default {
    // Search Google Books API
    searchBooks: (query) => {
        return ajax.get("/api/google", { params: { q: query} });
    },
    // Gets all saved books
    getSavedBooks: () => {
        return ajax.get("/api/books");
    },
    // Delete book from from saved books
    deleteBook: (id) => {
        return ajax.delete(`/api/books/${id}`);
    },
    saveBook: (bookData) => {
        return ajax.post("/api/books", bookData)
    }
};