const express = require('express');

const app = express();


app.get('/', (req, res) => {
	res.send({ hi: 'there erik!'});
});



//Heroku Porting with condition
const PORT = process.env.PORT || 5000;
app.listen(PORT);

//Development porting
//app.listen(5000);