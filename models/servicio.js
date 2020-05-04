const mongoose = require('mongoose');


let schema = mongoose.Schema;


let schemaServicio = new schema({

    nombreCliente: { type: String },
    primerApellido: { type: String },
    segundoApelldio: {type: String },
    email: { type: String },
    telefono: { type: String },
    marcaEquipo: {type: String },
    modeloEquipo: { type: String },
    falla: { type: String },
    accesorio: { type: String },
    adelanto: { type: String },
    costoTotal: { type: String },
    productos: { type:String },
    estado: { type: String },
    usuario:{ type: mongoose.Types.ObjectId('Usuario') }

});


module.exports = mongoose.model('servicio', schemaServicio);