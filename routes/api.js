const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("api index");
});

router.get("/imagesearch", (req, res) => {
	res.send("api imagesearch");
});

router.get("/latest", (req, res) => {
	res.send("api latest");
});

module.exports = router;
