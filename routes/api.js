const express = require("express");
const router = express.Router();

// const GoogleImages = require("google-images");
// const client = new GoogleImages("CSE ID", "API KEY");

async function imageSearch (keyword, history, page) {
	if (!keyword) throw new Error("Missing search keyword");
	if (!history || !Array.isArray(history)) throw new Error("Missing history array");
	history.push(keyword);
	history.splice(0, history.length - 10);
	// const searchResult = await client.search(keyword, { page });
	// return searchResult;
	return keyword;
}

router.get("/", (req, res) => {
	res.send("api index");
});

const searchHistory = [];

router.get("/imagesearch/:keyword", async (req, res) => {
	try { res.send(await imageSearch(req.params.keyword, searchHistory, req.query.page)); }
	catch(e) { res.status(400).send({ error: e.message }); }
});

router.get("/latest", (req, res) => {
	res.send("api latest");
});

module.exports = router;
