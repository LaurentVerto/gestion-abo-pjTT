"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useSavingsServices() {
    const [savings, setSavings] = (0, react_1.useState)([]);
    const [selectedSaving, setSelectedSaving] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const dataLocal = localStorage.getItem("mySavings");
        if (dataLocal) {
            setSavings(JSON.parse(dataLocal));
        }
    }, []);
    const deleteSavingById = (savingId, e) => {
        e.stopPropagation();
        e.preventDefault();
        const dataLocal = localStorage.getItem("mySavings");
        if (dataLocal) {
            const anciensSavings = JSON.parse(dataLocal);
            const savingToRemove = anciensSavings.find((saving) => saving.id === savingId);
            // Si on trouve l'élément à supprimer
            if (savingToRemove) {
                // Filtrer la liste pour exclure ce contrat spécifique
                const listeMaj = anciensSavings.filter((saving) => saving.id !== savingId);
                // Vérification de la liste après suppression
                // Si la liste a été modifiée, mettre à jour le localStorage et l'état
                if (anciensSavings.length !== listeMaj.length) {
                    localStorage.setItem("mySavings", JSON.stringify(listeMaj));
                    setSavings(listeMaj);
                }
                else {
                    console.log("Aucune épargne supprimé, vérifiez l'ID.");
                }
            }
            else {
                console.log("Aucune épargne trouvé avec l'ID :", savingId);
            }
        }
    };
    // const getSavingById = (saving : SavingsType) => {
    //     setNewSaving(saving)
    // }
    const updateSavingById = (updatedSaving) => {
        const dataLocal = localStorage.getItem("mySavings");
        if (dataLocal) {
            const anciensSavings = JSON.parse(dataLocal);
            const indexToUpdate = anciensSavings.findIndex((saving) => saving.id === updatedSaving.id);
            if (indexToUpdate !== -1) {
                anciensSavings[indexToUpdate] = updatedSaving;
                localStorage.setItem("mySavings", JSON.stringify(anciensSavings));
                setSavings([...anciensSavings]);
            }
            else {
                console.log("Aucune épargne trouvée avec l'ID :", updatedSaving.id);
            }
        }
    };
    return {
        savings,
        setSavings,
        // addNewSaving,
        deleteSavingById,
        // getSavingById,
        selectedSaving,
        updateSavingById
    };
}
exports.default = useSavingsServices;
//const useSavings = ()=> {
//  const [savings, setSavings] = useState([])
// useEffect(()=>{ /* ... */}, [])
// const addSaving = (newSaving) => { setSavings([...savings, newSaving]) }
// const removeSavingById = (savingID) => { newSavings = savingID.filter(saving => saving.id !== savingID)
// setSavings(newSavings) }
// return {saving, addSaving, removeSavingById} }
