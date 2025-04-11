const Contrat = require('../models/contrats.js')

exports.listeContrats = async (req, res, next) => {
    try{
        listeContrats = await Contrat.find();
        res.status(200).json(listeContrats)
    }
    catch (error){
        res.status(500).json(error)
    }
}

exports.creationContrat = async (req, res, next) => {
    const { nom, image, datePrlvt, prix, type, echeance } = req.body;

    console.log({ nom, image, datePrlvt, prix, type, echeance });

    

    const contrat = new Contrat({ // Crée une instance du modèle
        nom,
        image,
        datePrlvt,
        prix,
        type,
        echeance,
        statusAbo,
    });

    try {
        const nouveauContrat = await contrat.save(); 
        res.status(201).json(nouveauContrat);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du contrat", error });
    }
};
