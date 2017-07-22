var {mongoose} = require('./db/mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var {Fodu_model} = require('./models/fodu');
var {capitalize} = require('./models/fodu');

var app = express();
const port = process.env.PORT || 3000;


app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(bodyParser.json());

app.get('/site', (req,res) => {
	res.render('weasel');
});

app.post('/fodos', (req,res) => {
	var fod = new Fodu_model({
		name: req.body.name,
		element: req.body.element
	});

	fod.save().then((doc)=>{
		res.send(doc);
	}, (e)=>{
		res.status(400).send(e);
	});
});

app.get('/fodos', (req,res) => {
	Fodu_model.find().then((f)=>{
		res.send(f);
	},(e)=>{
		res.status(400).send(e);
	});
});


app.get('/fodos/:namanama',(req,res) => {
	Fodu_model.find({name:`${capitalize(req.params.namanama)}`}).then((f) => {
		res.send(f);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(port, () => {
	console.log(`Started on haywards ${port}`);
});


module.exports = {app};


// var newFodu_model = new Fodu_model({
// 	name: "leo"
// });

// newFodu_model.save().then((doc)=>{
// 	console.log('Saved Fodu_model',doc);
// }, (e) => {
// 	console.log("Fodu_model nai shakat");
// });