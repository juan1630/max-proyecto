const mongoose = require('mongoose'); 
let scehma = mongoose.Schema;


let schemaVentas = new scehma ({
    idUser: { type: mongoose.Types.ObjectId },
    total:{ type: String },
    subTotal: { type: String },
    idProducto: { type: String }
});


module.exports = mongoose.model('ventas', schemaVentas);