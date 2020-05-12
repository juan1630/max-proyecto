const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { URI } = require('./config/');

const login = require('./routes/login');
const usuario = require('./routes/user');
const producto = require('./routes/productos');
const servicio = require('./routes/servicio');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST ,  GET ,  PUT ,  DELETE ,  OPTIONS");
    next();
});



// ================================
//              RUTAS
// ================================




app.use('/user', usuario);
app.use('/producto', producto);
app.use('/servicio', servicio );
app.use('/login', login);

mongoose.connection.openUri(`mongodb://localhost:27017/ferrteria`, {
    useCreateIndex: true,
    useNewUrlParser: true
}, (error, response) => {
    if (error) throw error;

    console.log('Base de datos en 27017: \x1b[32m%s\x1b[0m', 'online');
});


app.listen(3000, () => {
    console.log(`Servidor en el puerto 3000`);
})