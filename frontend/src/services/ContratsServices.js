// //ContratServices

import { useEffect, useState } from "react";


export const useContratServices = () => {

    const [mesContrats, setMesContrats] = useState([])

    useEffect(() => {
        const dataLocal = localStorage.getItem("mesContrats");
        if (dataLocal) {
            setMesContrats(JSON.parse(dataLocal));
        }
    }, []);


    const [listeContrats, setListeContrats] = useState([]);
    
        useEffect(() => {
    
            const fetchData = async () => {
    
    
                try {
                    const response = await fetch('data.json');
    
                    const data = await response.json();
                    setListeContrats(data.abonnements);
    
                } catch (error) {
                    console.error("Erreur survenu lors de la récuperation de la liste : ", error)
                }
    
            }
            fetchData();
        }, [])
    


    const supprimerContrat = (idContrat) => {
        // Récupérer les anciens contrats depuis le localStorage
        const dataLocal = localStorage.getItem("mesContrats");

        if (dataLocal) {
            const anciensContrats = JSON.parse(dataLocal);
            // Trouver le contrat à supprimer (juste pour vérification)
            const contratToRemove = anciensContrats.find(contrat => contrat.id === idContrat);

            // Si on trouve l'élément à supprimer
            if (contratToRemove) {
                // Filtrer la liste pour exclure ce contrat spécifique
                const listeMaj = anciensContrats.filter(contrat => contrat.id !== idContrat);
                // Vérification de la liste après suppression

                // Si la liste a été modifiée, mettre à jour le localStorage et l'état
                if (anciensContrats.length !== listeMaj.length) {
                    localStorage.setItem("mesContrats", JSON.stringify(listeMaj));
                    setMesContrats(listeMaj);
                } else {
                    console.log("Aucun contrat supprimé, vérifiez l'ID.");
                }
            } else {
                console.log('Aucun contrat trouvé avec l\'ID :', idContrat);
            }
        }
    };



    const handleUpdate = (contratId) => {

        const aboUpdate = mesContrats.find(contrat => contrat.id === contratId);

        aboUpdate.statusAbo = !aboUpdate.statusAbo

        const aboFinal = mesContrats.map(contrat => contrat.id === contratId ? aboUpdate : contrat)

        localStorage.setItem("mesContrats",
            JSON.stringify(aboFinal)
        )
        setMesContrats(aboFinal)
    }



    const handleDown = (contratId, e) => {
        e.stopPropagation();  // Prevent event bubbling if necessary

        // Find the contract by its ID
        const echeanceUpdate = mesContrats.find(contrat => contrat.id === contratId);

        if (!echeanceUpdate) return;  // Handle the case where the contract is not found

        // Get the current echeance value and decrement it
        const echeanceDown = Number(echeanceUpdate.echeance) - 1;

        // Ensure the new echeance is within the range [0, 10]
        const validatedEcheance = Math.min(10, Math.max(0, echeanceDown));

        // Map over all contracts to update the specific contract
        const echeanceFinal = mesContrats.map(contrat =>
            contrat.id === contratId ? { ...contrat, echeance: validatedEcheance } : contrat
        );

        // Update localStorage and state with the new contracts array
        localStorage.setItem("mesContrats", JSON.stringify(echeanceFinal));
        setMesContrats(echeanceFinal);
    };



    const handleUp = (contratId, e) => {
        e.stopPropagation();  // Prevent event bubbling if necessary

        // Find the contract by its ID
        const echeanceUpdate = mesContrats.find(contrat => contrat.id === contratId);

        if (!echeanceUpdate) return;  // Handle the case where the contract is not found

        // Get the current echeance value and increment it
        const echeanceUp = Number(echeanceUpdate.echeance) + 1;

        // Ensure the new echeance is within the range [0, 10]
        const validatedEcheance = Math.min(10, Math.max(0, echeanceUp));

        // Map over all contracts to update the specific contract
        const echeanceFinal = mesContrats.map(contrat =>
            contrat.id === contratId ? { ...contrat, echeance: validatedEcheance } : contrat
        );

        // Update localStorage and state with the new contracts array
        localStorage.setItem("mesContrats", JSON.stringify(echeanceFinal));
        setMesContrats(echeanceFinal);
    };



    const total = mesContrats ? mesContrats.reduce((total, contrat) => total + parseFloat(contrat.prix), 0).toFixed(2) : 0; //si il y a des contrats tu fait un calcul : on creer donc 2 variable : total initialiser a 0 et contrat qui sera float de contrat.prix


    return {
        supprimerContrat,
        handleUpdate,
        handleDown,
        handleUp,
        total,
        mesContrats,
        setMesContrats,
        listeContrats,
        setListeContrats
    }

}

export default useContratServices;