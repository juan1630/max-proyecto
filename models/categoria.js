const mongoose = require('mongoose');
let  Schema =  mongoose.Schema;

let categoriaSchema = new Schema({
    
    name: { type: String },
    desc: { type: String },
    img: { type: String }
});

module.exports = mongoose.model('categoria', categoriaSchema);