const ModeDePaiement = require('../models/modeDePaiement.js')

exports.listeModeDePaiement = async (req, res, next) =>{
    try{
        listeModeDePaiement = await ModeDePaiement.find();
        res.status(200).json(listeModeDePaiement)
    }
    catch (error){
        res.status(500).json(error)
    }
}

exports.creationModeDePaiement = async (req, res, next) => {
    const { nom, renouvellement} = req.body;

    console.log({ nom, renouvellement});

    const modeDePaiement = new ModeDePaiement({ // Crée une instance du modèle
        nom,
        renouvellement,
    });    

    try {
        const nouveauModeDePaiement = await modeDePaiement.save(); 
        res.status(201).json(nouveauModeDePaiement);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du mode de paiement", error });
    }
};
