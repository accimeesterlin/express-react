
const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

const bodyParser = require('body-parser');

const morgan = require('morgan');

const path = require('path');

app.use(bodyParser());
app.use(morgan('dev'));

app.use(express.static('public'));


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "public/index.html"))
});



app.post("/send", (req, res) => {

	console.log(req.body);

	res.json("Ok");
});

app.listen(port, () => {
	console.log("App is start ", port);
});






