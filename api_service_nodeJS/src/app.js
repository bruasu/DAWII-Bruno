const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//CORS

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//routes
app.use('/api/login', require('./routers/login.route'));
app.use('/api/home',require('./routers/home.route'));
app.use('/api/user',require('./routers/user.route'));
app.use('/api/product',require('./routers/product.route'));

//starting the server

app.listen(app.get('port'), ()=>{
    console.log(`Server on Port ${app.get('port')}`);
});