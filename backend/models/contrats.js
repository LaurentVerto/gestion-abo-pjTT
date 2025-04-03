const mongoose = require('mongoose');

const ContratSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        default: ""
    },
    image: {
        type: String,
        required: true,
        default: ""
    },
    datePrlvt: {
        type: Date,
        required: true,
        default: Date.now
    },
    prix: {
        type: Number,
        required: true,
        default: 0
    },
    type: { // ✅ Corrigé : "type" en minuscule
        type: String,
        required: true,
        default: ""
    },
});

const Contrat = mongoose.model('Contrat', ContratSchema); 

module.exports = Contrat;
