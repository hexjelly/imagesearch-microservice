const express = require("express");
const router = express.Router();
const imageSearch = require("../models/api/imageSearch");
const latestSearches = require("../models/api/latestSearches");

router.get("/", (req, res) => {
	res.send("api index");
});

const searchHistory = [];

router.get("/imagesearch/:keyword", async (req, res) => {
	try {
		res.json(
			await imageSearch(req.params.keyword, searchHistory, req.query.page)
		);
	} catch (e) {
		res.status(400).json({ error: e.message });
	}
});

router.get("/latest", (req, res) => {
	res.json(latestSearches(searchHistory));
});

module.exports = router;
