import React, { useState } from "react";
import useContratServices from "../../services/ContratsServices";
import Contrat from "../../pages/Contrat";

function ListeContratsAbonnements() {
    const { deleteContrat, handleUpdate, myContracts } = useContratServices();

    const [isOpen, setIsOpen] = useState(false);

    const handleDrop = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const contractsFilter = myContracts.filter(
        (contrat) => contrat.type === "Abonnement"
    );

    return (
        <>
            <div
                className="flex items-center mt-3"
                onClick={handleDrop}
            >
                <h3 className="text-xs text-left ml-3 md:text-lg  hover:cursor-pointer">
                    Abonnements
                </h3>
                <svg
                    className={isOpen ? "rotate-180" : "rotate-0"}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 9L12 15L18 9"
                        stroke="#F8F8F8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                {contractsFilter.length > 0 && (
                    <p className="text-xs text-[#009CEA]">
                        {contractsFilter.length === 1
                            ? `${contractsFilter.length} Contrat`
                            : `${contractsFilter.length} Contrats`}
                    </p>
                )}
            </div>

            {isOpen && (
                <>
                    {myContracts
                        .filter((contrat) => {
                            const abos = contrat.type === "Abonnement";
                            return abos;
                        })
                        .map((contrat) => {
                            return (
                                <ul className="flex justify-center w-[100%] flex-col items-center relative mt-0 gap-3 subpixel-antialiased">
                                    <li
                                        key={contrat.id}
                                        className={`${
                                            contrat.statusAbo
                                                ? "border-l-[#5B975D]"
                                                : "border-l-[#975B5B]"
                                        } bg-[#282830] flex w-[90%] relative justify-between p-1  border-l-4  rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border mt-3 `}
                                    >
                                        <div
                                            className={`${
                                                contrat.statusAbo
                                                    ? "bg-[#5B975D]"
                                                    : "bg-[#975B5B]"
                                            } design-bar absolute left-0 top-0 h-[100%] w-1`}
                                        ></div>
                                        <div className="ml-0 flex flex-col justify-between ">
                                            <strong className=" text-md  leading-none">
                                                {contrat.nom} |{" "}
                                                <span className="font-sans text-xs">
                                                    {contrat.prix} €
                                                </span>
                                            </strong>
                                            <p className="text-xs font-sans font-light">
                                                {contrat.statusAbo
                                                    ? "Abonnement actif"
                                                    : "Abonnement Inactif"}
                                            </p>
                                            <p
                                                onClick={() =>
                                                    deleteContrat(contrat.id)
                                                }
                                                className="text-[11px]  font-sans text-[#975B5B] cursor-pointer hover:scale-105 transition-all duration-100"
                                            >
                                                Supprimer l'abonnement
                                            </p>
                                            <p></p>
                                        </div>

                                        <div
                                            className="flex flex-col justify-center leading-none items-end relative group "
                                            onClick={() =>
                                                handleUpdate(contrat.id)
                                            }
                                        >
                                            <div
                                                className={`${
                                                    contrat.statusAbo
                                                        ? "bg-[#5B975D]"
                                                        : "bg-[#975B5B]"
                                                } w-12 h-5 rounded-xl
                                        transition-all `}
                                            >
                                                <div
                                                    className={`${
                                                        contrat.statusAbo
                                                            ? "right-0"
                                                            : "right-6"
                                                    } w-6 h-6 bg-white rounded-full absolute top-3 
                                transition-all  `}
                                                ></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            );
                        })}
                </>
            )}
        </>
    );
}

export default ListeContratsAbonnements;
