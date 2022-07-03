const express = require('express');

// Setup Server
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	console.log('Here');
	res.render('index', { text123: 'World' });
});

app.listen(3000);
