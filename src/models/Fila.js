const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const filaSchema = new Schema({
    senha : {
        type : Number,
        required : true,
        unique : true
    },
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