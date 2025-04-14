import useMesContrats from "./useMesContrats";

function useDeleteContrat(){

    const [mesContrats, setMesContrats] = useMesContrats();

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

}