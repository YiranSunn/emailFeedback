const express = require('express');

const app = express();


app.get('/', (req, res) => {
	
	
	res.send({hi: 'there'});
	
	
	
});

const PORT = process.env.PORT || 4800;

app.listen(4800);