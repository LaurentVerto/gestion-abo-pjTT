import React, { useEffect, useState } from "react";
import CurrentSavings from "../components/Saving/CurrentSavings";
import SavingsCompleted from "../components/Saving/SavingsCompleted";
import useSavingsServices from "../services/SavingsServices";
import { type SavingsType } from "../services/SavingsServices";
import { v4 as uuidv4 } from "uuid";
import { Navigate, useNavigate } from "react-router-dom";
const ICON_SP = "/logo-xs.png";

function Saving() {
    
    const navigate = useNavigate();

    const { savings, setSavings, selectedSaving, updateSavingById } = useSavingsServices();



    const [message, setMessage] = useState("");

    const [editMode, setEditMode] = useState<boolean>(true);

    const [newSaving, setNewSaving] = useState<SavingsType>({
        id: uuidv4(),
        name: "",
        amount: 0,
        deadline: Date.now().toString(),
        deposit: [],
        withdrawal: [],
    });

    const [isOpen, setIsOpen] = useState(false);

    const handleDrop = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        let newValue: string | number = value;
        if (name === "amount") {
            newValue = parseFloat(value); // assure que c'est bien un nombre
        }

        setNewSaving((prev) => ({
            ...prev,
            [name]: newValue,
        }));
    };

    const handleSubmit = () => {
    const isExisting = savings.some((s) => s.id === newSaving.id);

    if (isExisting) {
        // 👉 Mise à jour
        updateSavingById(newSaving);
        setMessage("Épargne mise à jour avec succès");

        setTimeout(() => {
            setIsOpenModify(false);
            navigate(`/epargnes/${newSaving.id}`);
        }, 2000);
    } else {
        // 👉 Création
        setSavings((prev) => {
            const upSavings = [...prev, newSaving];
            localStorage.setItem("mySavings", JSON.stringify(upSavings));
            setMessage("Création de l'épargne réussie");

            setTimeout(() => {
                setIsOpen(false);
                navigate(`/epargnes/${newSaving.id}`);
            }, 2000);

            return upSavings;
        });
    }

    // Reset du formulaire après soumission
    setNewSaving({
        id: uuidv4(),
        name: "",
        amount: 0,
        deadline: Date.now().toString(),
        deposit: [],
        withdrawal: [],
    });
};

    const handleEditMode = () => {
        setEditMode(!editMode);
    };

    const [isOpenModify, setIsOpenModify] = useState<boolean>(false);

    const handleEdit = (
        e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => {
        e.preventDefault();
        e.stopPropagation();

        
        if (selectedSaving) {
    setNewSaving({ ...selectedSaving }); 
}
setIsOpenModify(true);


        console.log(newSaving);
        
    };



    

    return (
        <div className="">
            <div className="flex justify-between items-center mt-10">
                <h2 className="bold text-sm md:text-xl ml-5">Epargnes</h2>
                <img
                    src={ICON_SP}
                    alt="logo_xs"
                    className="h-8 mr-5"
                />
            </div>

            <CurrentSavings
                editMode={editMode}
                isOpenModify={isOpenModify}
                handleEdit={handleEdit}
                setNewSaving={setNewSaving}
            />
            <SavingsCompleted />

            <div className="absolute bottom-20 left-5 flex justify-between w-[90%] items-center">
                <div>
                    <ul className="text-xs text-[#009CEA] ">
                        <li>3 Epargnes en cours</li>
                        <li>1 Epargne finalisé</li>
                    </ul>
                </div>

                <button
                    className="bg-red-700 p-1 rounded-lg"
                    onClick={handleEditMode}
                >
                    Edit Mode
                </button>

                <div
                    onClick={handleDrop}
                    className="z-110"
                >
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer pointer-event-none"
                    >
                        <path
                            d="M25.0001 45.8334C36.506 45.8334 45.8334 36.506 45.8334 25.0001C45.8334 13.4941 36.506 4.16675 25.0001 4.16675C13.4941 4.16675 4.16675 13.4941 4.16675 25.0001C4.16675 36.506 13.4941 45.8334 25.0001 45.8334Z"
                            stroke="#F8F8F8"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M16.6667 25H33.3334"
                            stroke="#F8F8F8"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M25 16.6667V33.3334"
                            stroke="#F8F8F8"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </div>

            {/* overlay form ajout saving */}

            {isOpenModify && (
                <>
                    <div className="overlay-add-saving absolute top-0 left-0 w-full h-full bg-black/60 z-100 flex flex-col justify-center items-center gap-3">
                        <h4>Modifier une épargne</h4>
                        <input
                            onChange={handleChange}
                            name="name"
                            type="text"
                            value={newSaving.name}
                            placeholder="Nom de l'épargne"
                            className=" dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm "
                        />
                        <input
                            onChange={handleChange}
                            name="amount"
                            type="number"
                            value={newSaving.amount}
                            placeholder="Montant de l'épargne"
                            className=" dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm "
                        />
                        <input
                            name="deadline"
                            type="date"
                            placeholder="YYYY-MM-DD"
                            value={newSaving.deadline}
                            onChange={handleChange}
                            className=" dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm "
                        />
                        <button
                            onClick={handleSubmit}
                            className="mt-8
                shadow-lg
                bg-[#009CEA] min-w-[250px] text-white rounded-lg p-1 cursor-pointer transition-all  text-sm "
                        >
                            Modifier l'épargne
                        </button>
                        <button
                            onClick={(e) => {
                                handleEdit(e);
                            }}
                            className="mt-2
                shadow-lg
                bg-[#FE6666]/50 min-w-[200px] text-white rounded-lg p-1 cursor-pointer transition-all  text-sm "
                        >
                            Annuler les modification
                        </button>
                        <p>{message}</p>
                    </div>
                </>
            )}

            {isOpen && (
                <>
                    <div className="overlay-add-saving absolute top-0 left-0 w-full h-full bg-black/60 z-100 flex flex-col justify-center items-center gap-3">
                        <h4>Ajout d'une épargne</h4>
                        <input
                            onChange={handleChange}
                            name="name"
                            type="text"
                            value={newSaving.name}
                            placeholder="Nom de l'épargne"
                            className=" dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm "
                        />
                        <input
                            onChange={handleChange}
                            name="amount"
                            type="number"
                            value={newSaving.amount}
                            placeholder="Montant de l'épargne"
                            className=" dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm "
                        />
                        <input
                            name="deadline"
                            type="date"
                            placeholder="YYYY-MM-DD"
                            value={newSaving.deadline}
                            onChange={handleChange}
                            className=" dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm "
                        />
                        <button
                            onClick={handleSubmit}
                            className="mt-8
                shadow-lg
                bg-[#009CEA] min-w-[250px] text-white rounded-lg p-1 cursor-pointer transition-all  text-sm "
                        >
                            Créer l'épargne
                        </button>
                        <button
                            onClick={handleDrop}
                            className="mt-2
                shadow-lg
                bg-[#FE6666]/50 min-w-[200px] text-white rounded-lg p-1 cursor-pointer transition-all  text-sm "
                        >
                            Annuler
                        </button>
                        <p>{message}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Saving;
