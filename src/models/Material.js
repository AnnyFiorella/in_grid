// importa el paquete mongoose para el modelado del objeto Usuario
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Se crea el esquema del modelo Usuario con sus propiedades 
 */
const Material = new Schema({
    id: { type: Number},
    name: { type: String},
    cod_material: { type: Number},
    cod_program: { type: Number},
    duration: { type: String},
    type: { type: String},
    classification: { type: String},
    cost_center: { type: String},
    genre: { type: String}

},{
    collection: 'materials'
});

// Exporta el modelo del esquema Usuario para ser usado en la aplicación
module.exports = mongoose.model('Material', Material);