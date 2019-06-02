    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var medicoSchema = new Schema({
        nombre: { type: String, required: [true, 'El nombre es necesario'] },
        categoria: { type: String, required: [true, 'La categoria  es necesaria'] },
        modelo: { type: String, required: [true, 'El modelo es necesario'] },
        marca: { type: String, required: [true, 'El marca es necesario'] },
        precioCompra: { type: Number, required: [true, 'El precio es necesario'] },
        precioVenta: { type: Number, required: [true, 'El nombre es necesario'] },
        disponible: { type: String, required: [true, 'Es necesario'] },
        usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: false }
    });

    // agregar los required para el usuario y el hospital
    module.exports = mongoose.model('Productos', medicoSchema);