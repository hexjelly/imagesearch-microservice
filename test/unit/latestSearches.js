import test from "ava";
import latestSearches from "../../src/models/api/latestSearches";

test("latestSearches: gives correct results with <=10 history entries", t => {
	// test with 6 entries first
	let searchHistory = ["test1", "test2", "test3", "test4", "test5", "test6"];
	let result = latestSearches(searchHistory);
	t.deepEqual(result, ["test1", "test2", "test3", "test4", "test5", "test6"]);

	// add 4 more
	searchHistory = [
		"test1",
		"test2",
		"test3",
		"test4",
		"test5",
		"test6",
		"test7",
		"test8",
		"test9",
		"test10"
	];
	result = latestSearches(searchHistory);
	t.deepEqual(result, [
		"test1",
		"test2",
		"test3",
		"test4",
		"test5",
		"test6",
		"test7",
		"test8",
		"test9",
		"test10"
	]);
});

test("latestSearches: gives correct results with >10 history entries", t => {
	// test with 11 entries first
	let searchHistory = [
		"test1",
		"test2",
		"test3",
		"test4",
		"test5",
		"test6",
		"test7",
		"test8",
		"test9",
		"test10",
		"test11"
	];
	let result = latestSearches(searchHistory);
	t.deepEqual(result, [
		"test1",
		"test2",
		"test3",
		"test4",
		"test5",
		"test6",
		"test7",
		"test8",
		"test9",
		"test10"
	]);

	// add 3 more
	searchHistory = [
		"test1",
		"test2",
		"test3",
		"test4",
		"test5",
		"test6",
		"test7",
		"test8",
		"test9",
		"test10",
		"test11",
		"test12",
		"test13",
		"test14"
	];
	result = latestSearches(searchHistory);
	t.deepEqual(result, [
		"test1",
		"test2",
		"test3",
		"test4",
		"test5",
		"test6",
		"test7",
		"test8",
		"test9",
		"test10"
	]);
});
