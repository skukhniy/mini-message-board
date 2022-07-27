var express = require("express");
var router = express.Router();

const messages = [
	{
		text: "Hi There!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];
/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Mini Messageboard", messages: messages });
});

// recieve post from /new form
router.post("/new", (req, res, next) => {
	// grab input values from the form field
	const newMessage = {
		text: req.body.message_field,
		user: req.body.user_field,
		added: new Date(),
	};
	// push new message to messages array
	messages.push(newMessage);
	// send users back to homepage
	res.redirect("/");
});

module.exports = router;
