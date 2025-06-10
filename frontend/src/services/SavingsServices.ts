import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

export type TransactionType = "deposit" | "withdrawal";

export type ListTransactions = {
  date: Date;
  amount: number | undefined;
  type: TransactionType
};

export type SavingsType = {
  id: string;
  name: string;
  amount: number | undefined;
  deadline: string;
  deposit: ListTransactions[];
  withdrawal: ListTransactions[];
};

function useSavingsServices() {
  const [savings, setSavings] = useState<SavingsType[]>([]);

  const [savingsCompleted, setSavingsCompleted] = useState<SavingsType[]>([]);

  const [selectedSaving, setSelectedSaving] = useState<SavingsType>();

  useEffect(() => {
  const dataLocal = localStorage.getItem("mySavings");
  if (dataLocal) {
    const savings: SavingsType[] = JSON.parse(dataLocal);

    const filteredSavings = savings.filter((saving) => {
      const totalDeposit = saving.deposit.reduce((acc, curr) => acc + (curr.amount ?? 0), 0);
      const totalWithdrawal = saving.withdrawal.reduce((acc, curr) => acc + (curr.amount ?? 0), 0);
      const amount = totalDeposit - totalWithdrawal;

      if(saving.amount !== undefined) {

        
        return amount < saving.amount; // Garde ceux qui ont atteint ou dépassé l'objectif
      }
    });

    setSavings(filteredSavings);
  }
}, []);


 const deleteSavingById = (
  savingId: string,
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  e.stopPropagation();
  e.preventDefault();

  const dataLocal = localStorage.getItem("mySavings");

  if (dataLocal) {
    const anciensSavings = JSON.parse(dataLocal) as SavingsType[];

    const savingToRemove = anciensSavings.find(
      (saving) => saving.id === savingId
    );

    if (savingToRemove) {
      const listeMaj = anciensSavings.filter(
        (saving) => saving.id !== savingId
      );

      if (anciensSavings.length !== listeMaj.length) {
        localStorage.setItem("mySavings", JSON.stringify(listeMaj));
        setSavings(listeMaj);
        // Pas de navigate ici, le composant parent pourra gérer ça ou rafraîchir la liste
      } else {
        console.log("Aucune épargne supprimé, vérifiez l'ID.");
      }
    } else {
      console.log("Aucune épargne trouvé avec l'ID :", savingId);
    }
  }
};


  // const getSavingById = (saving : SavingsType) => {
  //     setNewSaving(saving)
  // }

  const updateSavingById = (updatedSaving: SavingsType) => {
    const dataLocal = localStorage.getItem("mySavings");

    if (dataLocal) {
      const anciensSavings = JSON.parse(dataLocal) as SavingsType[];

      const indexToUpdate = anciensSavings.findIndex(
        (saving) => saving.id === updatedSaving.id
      );

      if (indexToUpdate !== -1) {
        anciensSavings[indexToUpdate] = updatedSaving;

        localStorage.setItem("mySavings", JSON.stringify(anciensSavings));
        setSavings([...anciensSavings]);
      } else {
        console.log("Aucune épargne trouvée avec l'ID :", updatedSaving.id);
      }
    }
  };

  const addTransaction = (newTransaction: ListTransactions & { type: 'deposit' | 'withdrawal' }, savingId: string) => {
  const dataLocal = localStorage.getItem("mySavings");
  const previousSavings: SavingsType[] = dataLocal ? JSON.parse(dataLocal) : [];

  const updatedSavings = previousSavings.map((saving) => {
    if (saving.id === savingId) {
      return {
        ...saving,
        [newTransaction.type]: [
          ...saving[newTransaction.type], // deposit ou withdrawal
          { amount: newTransaction.amount, date: newTransaction.date || new Date() },
        ],
      };
    }
    return saving;
  });

    //ajouter la transaction dans le tableau correpondant

    localStorage.setItem("mySavings", JSON.stringify(updatedSavings))

    //mettre à jour l'objet 

    setSavings(updatedSavings)
  }


  useEffect(() => {
    //recuperer la liste des Savings
      const dataLocal = localStorage.getItem("mySavings");

      if(dataLocal){
      const savings: SavingsType[] = JSON.parse(dataLocal)

      //.map savings
        const sortSavings = savings.filter((saving) => {

          //calculer le total des depot
          const totalDeposit = saving.deposit.reduce((acc, curr) => acc + (curr.amount ?? 0), 0);

          //calculer le total des retrait
          const totalWithdrawal = saving.withdrawal.reduce((acc, curr) => acc + (curr.amount ?? 0), 0);

          // calculer le montant total depot - retait
          const amount = totalDeposit - totalWithdrawal

          //renvoi moi ceux qui ont un montant épargné supérieur ou = au "goal"
          if(saving.amount !== undefined) {
          return amount >= saving.amount
          }
        })
        setSavingsCompleted(sortSavings)
        
      }
  },[savings])




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

export default useSavingsServices;

