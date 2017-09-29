const GoogleImages = require("google-images");

async function imageSearch(searchKeyword, historyArray, offset) {
	if (!searchKeyword) throw new Error("Missing search keyword");
	if (!historyArray || !Array.isArray(historyArray))
		throw new Error("Missing history array");
	if (offset && isNaN(offset)) throw new Error("Offset is not a number");
	const client = new GoogleImages(process.env.G_CSE_ID, process.env.G_API_KEY);
	const searchResult = await client.search(searchKeyword, { page: offset });
	const logEntry = { searchKeyword, date: new Date() };
	historyArray.unshift(logEntry);
	return searchResult.map(reformatResults);
}

function reformatResults(elem) {
	return {
		url: elem.url,
		thumbnail: elem.thumbnail.url,
		description: elem.description,
		context: elem.parentPage
	};
}

module.exports = imageSearch;
