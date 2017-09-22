function latestSearches(historyArray) {
	if (historyArray.length > 10)
		historyArray.splice(0, historyArray.length - 10);
	return historyArray;
}

module.exports = latestSearches;
