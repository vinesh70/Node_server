const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/check", (req,res) => {
	let num = req.query.number;
	let n = parseInt(num);
	let r = n%2 == 0 ? num + " is Even." : num +  " is Odd.";
	res.json({"r":r});
});

app.listen(900, () => {console.log("server is listening on 900 port");})