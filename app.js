const express = require('express');
const engine = require('express-handlebars').engine;

const contactsRouter = require('./routes/contactsRoutes.js');

const app = express();

app.use(express.urlencoded({extended: true}));
app.engine('handlebars', engine());

app.use('/contacts', contactsRouter);
app.set('view engine', 'handlebars');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}`);
});