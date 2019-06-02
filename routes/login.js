const express = require('express');
const Usuario = require('../models/usuarios');
const bcrypt = require('bcryptjs');
const SEED = require('../config/index').SEED;
const jwt = require('jsonwebtoken');


const app = express();


app.post('/', (req, res) => {

    var body = req.body;

    Usuario.findOne({ email: body.email }, (error, userDB) => {


        if (error) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar usuario',
                errors: error
            });
        }

        if (!userDB) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Credenciales incorrectas - email',
                errors: error,
                message: body.email
            });
        }

        if (!bcrypt.compareSync(body.password, userDB.password)) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Credenciales incorrectas - password',
                errors: error
            });
        }

        // crear un toke digo token XD
        userDB.password = ':)';

        var token = jwt.sign({ usuario: userDB }, SEED, { expiresIn: 14400 });
        // se define una semilla y tambien se define la expiración en este caso 4 horas
        res.status(200).json({
            ok: true,
            usuario: userDB,
            token,
            id: userDB._id
        });
    });

});


module.exports = app;