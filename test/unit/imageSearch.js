import dotenv from "dotenv-extended";
dotenv.load({ errorOnMissing: true });
import test from "ava";
import imageSearch from "../../src/models/api/imageSearch";

test("imageSearch: not passing in search word throws error", async t => {
	const error = await t.throws(imageSearch());
	t.is(error.message, "Missing search keyword");
});

test("imageSearch: not passing in array throws error", async t => {
	const error = await t.throws(imageSearch("test"));
	t.is(error.message, "Missing history array");

	const invalid = await t.throws(imageSearch("test", "notanarray"));
	t.is(invalid.message, "Missing history array");
});
