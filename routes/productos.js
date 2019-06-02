var express = require('express');
var Productos = require('../models/productos');


var app = express();

app.get('/', (req, res) => {
    Productos.find({}, (error, items) => {
        if (error) {
            return res.status(300).json({
                ok: false,
                mensaje: 'Error al crear el producto',
                errors: error
            });
        }
        if (!items) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear el producto',
                errors: error
            });
        }
        if (items) {
            return res.status(200).json({
                ok: true,
                mensaje: 'Creado',
                items
            });
        }

    });

});

app.get('/:id', (req, res) => {
    var id = req.params.id;

    console.log(id);
    Productos.findById(id, (error, producto) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                error,
                mesaje: 'No se encontró producto'
            });
        }
        if (!producto) {
            return res.status(400).json({
                ok: false,
                error,
                mesaje: 'No se encontró producto'
            });
        }

        if (producto) {
            return res.status(200).json({
                ok: true,
                producto
            });
        }
    });
});
// ===============================
//          Inicia el put
// ===============================
app.put('/:id', (req, res) => {

    var body = req.body;
    var id = req.params.id;

    Productos.findById(id, (error, producto) => {


        if (error) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Algo pasó',
                error
            });

        }

        if (!producto) {
            return res.status(400).json({

                ok: false,
                mensaje: 'No se encotró producto',
                producto
            });
        }

        producto.nombre = body.nombre;
        producto.categoria = body.categoria;
        producto.modelo = body.modelo;
        producto.marca = body.marca;
        producto.precioCompra = body.precioCompra;
        producto.precioVenta = body.precioVenta;
        producto.disponible = body.disponible;

        producto.save((error, updatesProduct) => {
            if (error) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Algo pasó',
                    error
                });

            }

            if (!updatesProduct) {
                return res.status(400).json({

                    ok: false,
                    mensaje: 'No se encotró producto',
                    producto
                });
            }
            if (updatesProduct) {
                return res.status(200).json({
                    ok: true,
                    mensaje: 'Todo bien',
                    producto: updatesProduct
                });
            }

        });
    });

});

app.post('/', (req, res) => {
    var body = req.body;

    var producto = new Productos({
        nombre: body.nombre,
        categoria: body.categoria,
        modelo: body.modelo,
        marca: body.marca,
        precioCompra: body.precioCompra,
        precioVenta: body.precioVenta,
        disponible: body.disponible,
        usuario: req.body._id
    });

    producto.save((error, producto) => {
        if (error) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error al crear usuario',
                errors: error
            });
        }

        if (producto) {
            return res.status(201).json({
                ok: true,
                message: 'Medico was created',
                producto
            });
        }
    });

});


module.exports = app;