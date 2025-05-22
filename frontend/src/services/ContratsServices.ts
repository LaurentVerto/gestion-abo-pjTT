// //ContratServices

//npm create vite@latest test-type -- --template react-ts 
// crer porjet vite

import React, { useEffect, useState } from "react";

//custom type
export type ContratType = {
    datePrlvt: string;
    echeance: number;
    id: string;
    nom: string;
    image: string,
    prix: number;
    statusAbo: boolean;
    type: string
}

export type PreSavedContractType = {
    nom: string;
    image: string
}

const useContratServices = () => {
    
    // on recupere les contrats dans le localStorage
    const [myContracts, setMyContracts] = useState<ContratType[]>([])




    useEffect(() => {
        const dataLocal = localStorage.getItem("myContracts");
        if (dataLocal) {
            setMyContracts(JSON.parse(dataLocal) as ContratType[]);
        }
    }, []);
    //
    


    const [preSavedContractsList, setPreSavedContractsList] = useState<PreSavedContractType[]>([]);
    
        useEffect(() => {
    
            const fetchData = async () => {
    
    
                try {
                    const response = await fetch('data.json');
    
                    const data = await response.json();
                    setPreSavedContractsList(data.abonnements);
    
                } catch (error) {
                    console.error("Erreur survenu lors de la récuperation de la liste : ", error)
                }
    
            }
            fetchData();
        }, [])
    


    const deleteContrat = (idContrat: string) => {
        // Récupérer les anciens contrats depuis le localStorage
        const dataLocal = localStorage.getItem("myContracts");

        if (dataLocal) {
            const anciensContrats = JSON.parse(dataLocal) as ContratType[];
            // Trouver le contrat à supprimer (juste pour vérification)
            const contratToRemove = anciensContrats.find(contrat => contrat.id === idContrat);

            // Si on trouve l'élément à supprimer
            if (contratToRemove) {
                // Filtrer la liste pour exclure ce contrat spécifique
                const listeMaj = anciensContrats.filter(contrat => contrat.id !== idContrat);
                // Vérification de la liste après suppression

                // Si la liste a été modifiée, mettre à jour le localStorage et l'état
                if (anciensContrats.length !== listeMaj.length) {
                    localStorage.setItem("myContracts", JSON.stringify(listeMaj));
                    setMyContracts(listeMaj);
                } else {
                    console.log("Aucun contrat supprimé, vérifiez l'ID.");
                }
            } else {
                console.log('Aucun contrat trouvé avec l\'ID :', idContrat);
            }
        }
    };



    const handleUpdate = (contratId: string) => {        

        const aboUpdate = myContracts.find(contrat => contrat.id === contratId);
        

        if(aboUpdate){
            aboUpdate.statusAbo = !aboUpdate.statusAbo
            
        }


        const aboFinal = myContracts.map(contrat => contrat.id === contratId ? aboUpdate : contrat)

        if(aboFinal){
            localStorage.setItem("myContracts",
                JSON.stringify(aboFinal)
            )
            const validContracts = aboFinal.filter((c): c is ContratType => c !== undefined);
            // A VOIR PCK JE COMPREND RIEN
            // A VOIR PCK JE COMPREND RIEN
            // A VOIR PCK JE COMPREND RIEN
            //TODO: a regarder pck comprend rien

            setMyContracts(validContracts)
            return;
        }

        
    }



    const handleDown = (contratId: ContratType["id"], e: React.MouseEvent) => {
        e.stopPropagation();  // Prevent event bubbling if necessary

        // Find the contract by its ID
        const echeanceUpdate = myContracts.find(contrat => contrat.id === contratId);

        if (!echeanceUpdate) return;  // Handle the case where the contract is not found

        // Get the current echeance value and decrement it
        const echeanceDown = Number(echeanceUpdate.echeance) - 1;

        // Ensure the new echeance is within the range [0, 10]
        const validatedEcheance = Math.min(10, Math.max(0, echeanceDown));

        // Map over all contracts to update the specific contract
        const echeanceFinal = myContracts.map(contrat =>
            contrat.id === contratId ? { ...contrat, echeance: validatedEcheance } : contrat
        );

        // Update localStorage and state with the new contracts array
        localStorage.setItem("mesContrats", JSON.stringify(echeanceFinal));
        setMyContracts(echeanceFinal);
    };



    const handleUp = (contratId: ContratType["id"], e: React.MouseEvent) => {
        e.stopPropagation();  // Prevent event bubbling if necessary

        // Find the contract by its ID
        const echeanceUpdate = myContracts.find(contrat => contrat.id === contratId);

        if (!echeanceUpdate) return;  // Handle the case where the contract is not found

        // Get the current echeance value and increment it
        const echeanceUp = Number(echeanceUpdate.echeance) + 1;

        // Ensure the new echeance is within the range [0, 10]
        const validatedEcheance = Math.min(10, Math.max(0, echeanceUp));

        // Map over all contracts to update the specific contract
        const echeanceFinal = myContracts.map(contrat =>
            contrat.id === contratId ? { ...contrat, echeance: validatedEcheance } : contrat
        );

        // Update localStorage and state with the new contracts array
        localStorage.setItem("mesContrats", JSON.stringify(echeanceFinal));
        setMyContracts(echeanceFinal);
    };



    const total = myContracts ? myContracts.reduce((total, contrat) => total + parseFloat(contrat.prix.toString()), 0).toFixed(2) : 0; //si il y a des contrats tu fait un calcul : on creer donc 2 variable : total initialiser a 0 et contrat qui sera float de contrat.prix


    return {
        deleteContrat,
        handleUpdate,
        handleDown,
        handleUp,
        total,
        myContracts,
        setMyContracts,
        preSavedContractsList,
        setPreSavedContractsList
    };

};

export default useContratServices;