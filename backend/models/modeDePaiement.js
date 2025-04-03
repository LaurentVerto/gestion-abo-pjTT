const mongoose = require('mongoose');

const modeDePaiementSchema = new mongoose.Schema({
    nom:{
        required: true,
        type: String
    },
    renouvellement:{
        required: true,
        type: String
    },
});

const ModeDePaiement = mongoose.model('ModeDePaiement', modeDePaiementSchema);

module.exports = ModeDePaiement;