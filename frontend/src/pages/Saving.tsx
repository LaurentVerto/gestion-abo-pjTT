import React, { useState } from "react";
import CurrentSavings from "../components/Saving/CurrentSavings";
import SavingsCompleted from "../components/Saving/SavingsCompleted";
const ICON_SP = "/logo-xs.png";

function Saving() {
    const [isOpen, setIsOpen] = useState(false);

    const handleDrop = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="realtive">
            <div className="flex justify-between items-center mt-10">
                <h2 className="bold text-sm md:text-xl ml-5">Epargnes</h2>
                <img
                    src={ICON_SP}
                    alt="logo_xs"
                    className="h-8 mr-5"
                />
            </div>

            <CurrentSavings />
            <SavingsCompleted />

            <div className="absolute bottom-20 left-5 flex justify-between w-[90%] items-center">
                <div>
                    <ul className="text-xs text-[#009CEA] ">
                        <li>3 Epargnes en cours</li>
                        <li>1 Epargne finalisé</li>
                    </ul>
                </div>

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

            {isOpen && (
                <>
                    <div className="overlay-add-saving absolute top-0 left-0 w-full h-full bg-black/60 z-100 flex flex-col justify-center items-center gap-3">
                        <h4>Ajout d'une épargne</h4>
                        <input
                            type="text"
                            placeholder="Nom de l'épargne"
                            className=" dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm "
                        />
                        <input
                            type="number"
                            placeholder="Montant de l'épargne"
                            className=" dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm "
                        />
                        <input
                            type="date"
                            placeholder="Nom de l'épargne"
                            className=" dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm "
                        />
                        <button
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
                    </div>
                </>
            )}
        </div>
    );
}

export default Saving;
