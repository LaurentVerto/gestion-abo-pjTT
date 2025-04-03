import React, { useState } from "react";

function ModeDePaiementAdd() {

    const [message, setMessage] = useState('')

    const [modeDePaiement, setModeDePaiement] = useState({
        nom: "",
        renouvellement: "",
    })


    const handleChange = (e) => {
        const { name, value } = e.target;

        setModeDePaiement((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/modeDePaiement/creation-modeDePaiement", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(modeDePaiement)
            });

            if (response.status === 201) {
                const data = await response.json();
                setMessage("Création du mode de paiement OK");
                setModeDePaiement({
                    nom: '',
                    renouvellement: '',
                    
                }); // Réinitialiser le formulaire
            } else {
                setMessage("Erreur lors de la création du mode de paiement");
            }
        } catch (error) {
            setMessage("Une erreur est survenue lors de la création du mode de paiement");
            console.error("Erreur lors de la création :", error);
        }
    };


    return (
        <>
            <h2>contrat add</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="nom">Nom du mode de paiement</label>
                <input
                    type="text"
                    className="border w-100"
                    name="nom"
                    value={modeDePaiement.nom}
                    onChange={handleChange}
                />

                <label htmlFor="renouvellement">Fréquence du mode de paiement</label>
                <input
                    type="text"
                    className="border w-100"
                    name="renouvellement"
                    value={modeDePaiement.renouvellement}
                    onChange={handleChange}
                />

                <button type="submit" className="bg-black w-100 text-white rounded-lg mt-5 p-1">Ajouter le mode de paiement</button>

            </form>
            <p>{message}</p>
        </>
    )
}

export default ModeDePaiementAdd;