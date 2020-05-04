const mongoose = require('mongoose');
let schema = mongoose.Schema;
 
let scehmAdmin = new schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, unique: true, required: [true, 'El correo es necesario'] },
    password: { type: String, required: [true, 'La constraseña es necesario'] },
    img: { type: String },
    role: { type: String, required: true, default: 'USER_ROLE', enum: rolesValidos },
    google: { type: Boolean, default: false }
});

module.exports = mongoose.model('adminSchema', scehmAdmin ) ;
