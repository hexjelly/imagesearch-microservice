const got = require("got");

async function imageSearch(searchKeyword, historyArray, offset) {
	if (!searchKeyword) throw new Error("Missing search keyword");
	if (!historyArray || !Array.isArray(historyArray))
		throw new Error("Missing history array");
	if (offset && isNaN(offset)) throw new Error("Offset is not a number");

	const url = `https://api.qwant.com/api/search/images?count=10&q=${searchKeyword}&offset=${offset
		? offset
		: 1}`;
	const searchResult = await got(url, { json: true });

	const logEntry = { searchKeyword, date: new Date() };
	historyArray.unshift(logEntry);
	return searchResult.body.data.result.items.map(reformatResults);
}

function reformatResults(elem) {
	return {
		url: elem.media,
		thumbnail: `https:${elem.thumbnail}`,
		description: elem.title,
		context: elem.url
	};
}

module.exports = imageSearch;
