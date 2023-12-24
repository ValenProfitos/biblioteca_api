const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bibliotecas", { });

const LibroSchema = new mongoose.Schema({
    id: Number,
    titulo: String,
    autor: String
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;