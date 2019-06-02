var express = require('express');
var Usuario = require('../models/usuarios');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


var middlewareAutenticacion = require('../middlewares/authentication');

var app = express();

app.post('/', (req, res) => {
    var body = req.body;

    console.log(body);

    var usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password)
    });



    usuario.save((error, usuario) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear usuario',
                errors: error
            });
        }

        res.status(201).json({
            ok: true,
            usuario,
            usuarioToken: req.usuario
        });


    });

});


module.exports = app;