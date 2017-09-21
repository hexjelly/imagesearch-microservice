// const GoogleImages = require("google-images");
// const client = new GoogleImages("CSE ID", "API KEY");

async function imageSearch (searchKeyword, historyArray, pageOffset) {
	if (!searchKeyword) throw new Error("Missing search keyword");
	if (!historyArray || !Array.isArray(historyArray)) throw new Error("Missing history array");
	historyArray.push(searchKeyword);
	// const searchResult = await client.search(keyword, { page: pageOffset });
	// return searchResult;
	return searchKeyword;
}

module.exports = imageSearch;
