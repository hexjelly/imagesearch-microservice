require("dotenv-extended").load({ errorOnMissing: true });
const express = require("express");
const app = express();

// Routes
app.use(require("./routes"));

app.listen(process.env.PORT, function() {
	console.log(`Listening on port ${process.env.PORT}...`);
});
