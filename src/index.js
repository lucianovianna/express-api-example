const express = require("express");
const mongoose = require("mongoose");

const app = express();

module.exports = mongoose.connect("mongodb+srv://admin:admin@cluster1-hcdlb.mongodb.net/express-api-example?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(4000, () => {
	console.log(new Date() + " server running on port 4000.\n");
});