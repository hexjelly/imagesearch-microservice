const GoogleImages = require("google-images");
const client = new GoogleImages(process.env.G_CSE_ID, process.env.G_API_KEY);

async function imageSearch(searchKeyword, historyArray, offset) {
	if (!searchKeyword) throw new Error("Missing search keyword");
	if (!historyArray || !Array.isArray(historyArray))
		throw new Error("Missing history array");
	const logEntry = { searchKeyword, date: new Date() };
	historyArray.unshift(logEntry);
	console.log(`${logEntry.date}: New search for "${logEntry.searchKeyword}"`);
	const searchResult = await client.search(searchKeyword, { page: offset });
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
