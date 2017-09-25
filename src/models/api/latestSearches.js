function latestSearches(historyArray) {
	if (historyArray.length > 10) historyArray.splice(10);
	return historyArray;
}

module.exports = latestSearches;
