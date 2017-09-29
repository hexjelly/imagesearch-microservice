import dotenv from "dotenv-extended";
dotenv.load({ errorOnMissing: true });
import test from "ava";
import imageSearch from "../../src/models/api/imageSearch";

test("not passing in search word throws error", async t => {
	const error = await t.throws(imageSearch());
	t.is(error.message, "Missing search keyword");
});

test("not passing in array throws error", async t => {
	const error = await t.throws(imageSearch("test"));
	t.is(error.message, "Missing history array");

	const invalid = await t.throws(imageSearch("test", "notanarray"));
	t.is(invalid.message, "Missing history array");
});

test("passing in non-numeric offset throws error", async t => {
	const error = await t.throws(imageSearch("test", [], "notanumber"));
	t.is(error.message, "Offset is not a number");
});
