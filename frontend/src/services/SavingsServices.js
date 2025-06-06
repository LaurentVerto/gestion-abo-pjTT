"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useSavingsServices() {
    const [savings, setSavings] = (0, react_1.useState)([]);
    const [savingsCompleted, setSavingsCompleted] = (0, react_1.useState)([]);
    const [selectedSaving, setSelectedSaving] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const dataLocal = localStorage.getItem("mySavings");
        if (dataLocal) {
            const savings = JSON.parse(dataLocal);
            const filteredSavings = savings.filter((saving) => {
                const totalDeposit = saving.deposit.reduce((acc, curr) => { var _a; return acc + ((_a = curr.amount) !== null && _a !== void 0 ? _a : 0); }, 0);
                const totalWithdrawal = saving.withdrawal.reduce((acc, curr) => { var _a; return acc + ((_a = curr.amount) !== null && _a !== void 0 ? _a : 0); }, 0);
                const amount = totalDeposit - totalWithdrawal;
                return amount < saving.amount; // Garde ceux qui ont atteint ou dépassé l'objectif
            });
            setSavings(filteredSavings);
        }
    }, []);
    const deleteSavingById = (savingId, e) => {
        e.stopPropagation();
        e.preventDefault();
        const dataLocal = localStorage.getItem("mySavings");
        if (dataLocal) {
            const anciensSavings = JSON.parse(dataLocal);
            const savingToRemove = anciensSavings.find((saving) => saving.id === savingId);
            if (savingToRemove) {
                const listeMaj = anciensSavings.filter((saving) => saving.id !== savingId);
                if (anciensSavings.length !== listeMaj.length) {
                    localStorage.setItem("mySavings", JSON.stringify(listeMaj));
                    setSavings(listeMaj);
                    // Pas de navigate ici, le composant parent pourra gérer ça ou rafraîchir la liste
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
    const addTransaction = (newTransaction, savingId) => {
        const dataLocal = localStorage.getItem("mySavings");
        const previousSavings = dataLocal ? JSON.parse(dataLocal) : [];
        const updatedSavings = previousSavings.map((saving) => {
            if (saving.id === savingId) {
                return Object.assign(Object.assign({}, saving), { [newTransaction.type]: [
                        ...saving[newTransaction.type], // deposit ou withdrawal
                        { amount: newTransaction.amount, date: newTransaction.date || new Date() },
                    ] });
            }
            return saving;
        });
        //ajouter la transaction dans le tableau correpondant
        localStorage.setItem("mySavings", JSON.stringify(updatedSavings));
        //mettre à jour l'objet 
        setSavings(updatedSavings);
    };
    (0, react_1.useEffect)(() => {
        //recuperer la liste des Savings
        const dataLocal = localStorage.getItem("mySavings");
        if (dataLocal) {
            const savings = JSON.parse(dataLocal);
            //.map savings
            const sortSavings = savings.filter((saving) => {
                //calculer le total des depot
                const totalDeposit = saving.deposit.reduce((acc, curr) => { var _a; return acc + ((_a = curr.amount) !== null && _a !== void 0 ? _a : 0); }, 0);
                //calculer le total des retrait
                const totalWithdrawal = saving.withdrawal.reduce((acc, curr) => { var _a; return acc + ((_a = curr.amount) !== null && _a !== void 0 ? _a : 0); }, 0);
                // calculer le montant total depot - retait
                const amount = totalDeposit - totalWithdrawal;
                //renvoi moi ceux qui ont un montant épargné supérieur ou = au "goal"
                return amount >= saving.amount;
            });
            setSavingsCompleted(sortSavings);
        }
    }, []);
    return {
        savings,
        setSavings,
        // addNewSaving,
        deleteSavingById,
        // getSavingById,
        selectedSaving,
        updateSavingById,
        addTransaction,
        savingsCompleted
    };
}
exports.default = useSavingsServices;
