const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../views/index.html"));
});

// api routes
router.use("/api", require("./api"));

module.exports = router;
