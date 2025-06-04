import React, { useEffect, useState } from "react";

export type ListTransactions = {
  date: Date;
  amount: number;
};

export type SavingsType = {
  id: string;
  name: string;
  amount: number;
  deadline: string;
  deposit: ListTransactions[];
  withdrawal: ListTransactions[];
};

function useSavingsServices() {
  const [savings, setSavings] = useState<SavingsType[]>([]);

  const [selectedSaving, setSelectedSaving] = useState<SavingsType>();

  useEffect(() => {
    const dataLocal = localStorage.getItem("mySavings");
    if (dataLocal) {
      setSavings(JSON.parse(dataLocal) as SavingsType[]);
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

      // Si on trouve l'élément à supprimer
      if (savingToRemove) {
        // Filtrer la liste pour exclure ce contrat spécifique
        const listeMaj = anciensSavings.filter(
          (saving) => saving.id !== savingId
        );
        // Vérification de la liste après suppression

        // Si la liste a été modifiée, mettre à jour le localStorage et l'état
        if (anciensSavings.length !== listeMaj.length) {
          localStorage.setItem("mySavings", JSON.stringify(listeMaj));
          setSavings(listeMaj);
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

export default useSavingsServices;

//const useSavings = ()=> {
//  const [savings, setSavings] = useState([])

// useEffect(()=>{ /* ... */}, [])

// const addSaving = (newSaving) => { setSavings([...savings, newSaving]) }

// const removeSavingById = (savingID) => { newSavings = savingID.filter(saving => saving.id !== savingID)
// setSavings(newSavings) }

// return {saving, addSaving, removeSavingById} }
