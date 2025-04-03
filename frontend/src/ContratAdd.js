import React, { useState } from "react";

function ContratAdd() {

    const [message, setMessage] = useState('')

    const [contrat, setContrat] = useState({
        nom: "",
        image: "",
        datePrlvt: new Date(), // à vérifier
        prix: "",
        type: ""
    })

    const [nomContrat, setNomContrat] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setContrat((prev) => ({
            ...prev,
            [name]: name === "prix" ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/contrats/creation-contrat", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contrat)
            });

            if (response.status === 201) {
                const data = await response.json();
                setMessage("Création de la recette réussie");
                setContrat({
                    nom: '',
                    image: '',
                    datePrlvt: new Date(), // à vérifier
                    prix: 0,
                    type: ""
                }); // Réinitialiser le formulaire
            } else {
                setMessage("Erreur lors de la création du contrat");
            }
        } catch (error) {
            setMessage("Une erreur est survenue lors de la création du contrat");
            console.error("Erreur lors de la création :", error);
        }
    };


    return (
        <>
            <h2>contrat add</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label htmlFor="nom">Nom du contrat</label>
                <input
                    type="text"
                    className="border w-100"
                    name="nom"
                    value={contrat.nom}
                    onChange={handleChange}
                />

                <label htmlFor="image">Image du contrat</label>
                <input
                    type="text"
                    className="border w-100"
                    name="image"
                    value={contrat.image}
                    onChange={handleChange}
                />

                <label htmlFor="datePrlvt">Date de prélèvement du contrat</label>
                <input
                    type="date"
                    className="border w-100"
                    name="datePrlvt"
                    value={contrat.datePrlvt}
                    onChange={handleChange}
                />

                <label htmlFor="prix">Prix du contrat</label>
                <input
                    type="number"
                    className="border w-100"
                    name="prix"
                    value={contrat.prix}
                    onChange={handleChange}
                />

                <label htmlFor="prix">Type du contrat</label>
                <input
                    type="text"
                    className="border w-100"
                    name="type"
                    value={contrat.type}
                    onChange={handleChange}
                />

                <button type="submit" className="bg-black w-100 text-white rounded-lg mt-5 p-1">Ajouter le contrat</button>

            </form>
            <p>{message}</p>
        </>
    )
}

export default ContratAdd;