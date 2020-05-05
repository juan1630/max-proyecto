const expres = require('express');
const servicio = require('../models/servicio');

let app = expres();


app.get('/servicios', (req, resp) => {


    servicio.find()
    .exec((error, serviciosDB) => {

            if(error){
                return resp.status(500)
                .json({
                    ok:false,
                    message: 'No se pudo conectar',
                    error
                })

            }

            if( !serviciosDB || serviciosDB === null ){
                return resp.status(400)
                .json({
                    ok: false,
                    message: 'No se enocntraron',
                    servicios: serviciosDB
                });
            }

            return resp.status(200)
            .json({
                ok: true,
                message: 'Se encontraron los servicios',
                servicios: serviciosDB
            });
    });

});



app.post('/nuevo/servicio', (req, resp) =>{

    let body = req.body;

    let newService =  new servicio({

        nombreCliente: body.nombreCliente,
        primerApellido: body.primerApellido,
        segundoApelldio: body.segundoApelldio,
        email: body.email,
        telefono: body.telefono,
        marcaEquipo: body.marcaEquipo,
        modeloEquipo: body.modeloEquipo,
        falla: body.falla,
        accesorio: body.accesorio,
        adelanto: body.adelanto,
        costoTotal: body.costoTotal,
        productos: body.productos,
        estado: body.estado,
        usuario: body.usuario,
        servicio: body.servicio
    });


    newService.save( (error, serviceDB) =>{

        if(error){
            return resp.status(500)
            .json({
                ok:false,
                message: 'No se pudo conectar',
                error
            });
        }

        if(!serviceDB){
            return resp.status(401)
            .json({
                ok:false,
                message: 'No se pudo cear el serivicio',
                sefvicio: serviceDB
            })
        }



        return resp.status(201)
        .json({
            ok: true,
            message: 'Se creo el servicio',
            servicio: serviceDB
        });

    });


});


app.put('/servicios/edit/:id', (req, resp) =>{


    let body = req.body;
    let id = req.params.id;

    servicio.findByIdAndUpdate({_id:id}, body, (error, serviceUpdated) =>{

        if(error){
            return resp.status(500)
            .json({
                ok:false,
                message: 'No se pudo conectar',
                error
            });
        }

        if( !serviceUpdated){
            return resp.status(400)
            .json({
                ok: false,
                message: 'No se encontró',
                servicio: serviceUpdated
            });
        }

        return resp.status(200)
        .json({
            ok: true,
            message: 'Se actualizo',
            servicio: serviceUpdated
        });

    });

});

module.exports = app; 