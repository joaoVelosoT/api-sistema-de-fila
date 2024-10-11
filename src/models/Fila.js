const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const filaSchema = new Schema({
    nome : {
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true
    },
})

const Fila = mongoose.model('Fila', filaSchema);

module.exports = Fila;