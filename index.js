const express = require("express");
const app = express();

// Routes
app.use(require("./routes"));

app.listen(3000, function() {
	console.log("Listening on port 3000...");
});
