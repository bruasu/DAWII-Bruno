const express = require('express');
const morgan = require('morgan');
const app = express();
const multer = require('multer');
const cors = require('cors');
const uuid = require('uuid/v4');
const path = require('path');

//static file

app.use(express.static(path.join(__dirname, 'public')));

//multer
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/img/'),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname).toLocaleLowerCase());
    }
});

app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(multer({
    storage: storage
}).single('image'));

//routes
app.use('/api/login', require('./routers/login.route'));
app.use('/api/home',require('./routers/home.route'));
app.use('/api/user',require('./routers/user.route'));
app.use('/api/product',require('./routers/product.route'));
app.use('/api/category',require('./routers/category.route'));

//starting the server

app.listen(app.get('port'), ()=>{
    console.log(`Server on Port ${app.get('port')}`);
});