    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var medicoSchema = new Schema({
        nombre: { type: String  },
        categoria: { type: String },
        modelo: { type: String  },
        marca: { type: String },
        precioCompra: { type: String  },
        precioVenta: { type: String  },
        disponible: { type: Number},
           img: { type: String },
        usuario: { type: Schema.Types.ObjectId, ref: 'Usuario', required: false }
    });

    // agregar los required para el usuario y el hospital
    module.exports = mongoose.model('Productos', medicoSchema);