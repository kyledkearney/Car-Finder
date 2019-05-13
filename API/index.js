const express = require("express");
const router = express.Router();
const bookRoutes = require("./books");
const googlRoutes = require("./google");

// ----- /api/books
router.use("/books", bookRoutes);

// ----- /api/google
router.use("/google", googlRoutes);

module.exports = router;