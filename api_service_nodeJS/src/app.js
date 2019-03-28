const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/login', require('./routers/login.route'));
app.use('/api/home',require('./routers/home.route'));

//starting the server

app.listen(app.get('port'), ()=>{
    console.log(`Server on Port ${app.get('port')}`);
});