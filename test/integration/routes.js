import dotenv from "dotenv-extended";
dotenv.load({ errorOnMissing: true });
import supertest from "supertest";
import test from "ava";
import app from "../../src/app";

test("api/", async t => {
	const res = await supertest(app).get("/api/");

	t.is(res.status, 400);
	t.is(res.type, "application/json");
	t.truthy(res.body.error);
});

test.serial("api/latest/", async t => {
	const res = await supertest(app).get("/api/latest/");

	t.is(res.status, 200);
	t.is(res.type, "application/json");
	t.falsy(res.body.error);
	t.is(res.body.length, 0);
});

test("api/imagesearch/", async t => {
	const res = await supertest(app).get("/api/imagesearch/");

	t.is(res.status, 400);
	t.is(res.type, "application/json");
	t.truthy(res.body.error);
});

test.serial("api/imagesearch/test", async t => {
	const res = await supertest(app).get("/api/imagesearch/sloth");

	t.is(res.status, 200);
	t.is(res.type, "application/json");
	t.falsy(res.body.error);
	// not very good to rely on this, but we can assume an imge search for
	// 'sloth' will give us at least 10 results back *shrug*.
	t.is(res.body.length, 10);
});

test.serial("api/imagesearch/test?offset=x", async t => {
	// probably a better way to do this... another bad assumption that
	// results will stay the same if querying right after each other.
	const res = await supertest(app).get("/api/imagesearch/test");
	const offset2 = await supertest(app).get("/api/imagesearch/test?offset=2");
	const offset10 = await supertest(app).get("/api/imagesearch/test?offset=10");
	const offsetString = await supertest(app).get(
		"/api/imagesearch/test?offset=notanumber"
	);

	t.is(res.status, 200);
	t.is(res.type, "application/json");
	t.falsy(res.body.error);
	t.is(offset2.status, 200);
	t.is(offset2.type, "application/json");
	t.falsy(offset2.body.error);
	t.is(offset10.status, 200);
	t.is(offset10.type, "application/json");
	t.falsy(offset10.body.error);
	t.is(offsetString.status, 400);
	t.is(offsetString.type, "application/json");
	t.truthy(offsetString.body.error);

	t.deepEqual(res.body[1], offset2.body[0]);
	t.deepEqual(res.body[9], offset10.body[0]);
});

test("/", async t => {
	const res = await supertest(app).get("/");

	t.is(res.status, 200);
	t.is(res.type, "text/html");
});

test.serial("api/latest/ with history", async t => {
	const res = await supertest(app).get("/api/latest/");

	t.is(res.status, 200);
	t.is(res.type, "application/json");
	t.falsy(res.body.error);
	t.is(res.body.length, 4);
	t.is(res.body[3].searchKeyword, "sloth");
});
