const express = require('express');
const router = express.Router();

const contratCtrl = require('../controllers/ContratControllers.js');

router.get("/liste-contrats", contratCtrl.listeContrats);
router.post("/creation-contrat", contratCtrl.creationContrat);

module.exports = router