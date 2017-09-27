import supertest from "supertest";
import test from "ava";

test("api/", async t => {
	const res = await supertest(require("../../src/app")).get("/api/");

	t.is(res.status, 400);
	t.is(res.type, "application/json");
	t.truthy(res.body.error);
});

test("api/latest/", async t => {
	const res = await supertest(require("../../src/app")).get("/api/latest/");

	t.is(res.status, 200);
	t.is(res.type, "application/json");
	t.falsy(res.body.error);
	t.fail();
});

test("api/imagesearch/", async t => {
	const res = await supertest(require("../../src/app")).get(
		"/api/imagesearch/"
	);

	t.is(res.status, 200);
	t.is(res.type, "application/json");
	t.falsy(res.body.error);
	t.fail();
});

test("/", async t => {
	t.fail();
});
