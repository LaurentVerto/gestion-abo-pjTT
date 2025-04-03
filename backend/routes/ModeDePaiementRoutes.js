const express = require('express');
const router = express.Router();

const modeDePaiementCtrl = require('../controllers/modeDePaiementControllers.js');

router.get("/liste-modeDePaiement", modeDePaiementCtrl.listeModeDePaiement);

router.post("/creation-modeDePaiement", modeDePaiementCtrl.creationModeDePaiement);



module.exports = router