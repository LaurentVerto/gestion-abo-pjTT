import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import {
    type SavingsType,
    ListTransactions,
} from "../services/SavingsServices";

const ICON_SP = "/logo-xs.png";

function SavingDetails() {
    const { id } = useParams();
    const [selected, setSelected] = useState<SavingsType | null>(null);

    const [isOpen, setIsOpen] = useState(false);
    const handleDrop = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const dataLocal = localStorage.getItem("mySavings");

        if (dataLocal) {
            try {
                const parsedData: SavingsType[] = JSON.parse(dataLocal);

                // 🔍 Trouve la donnée avec l'ID correspondant
                const foundItem = parsedData.find((item) => item.id === id);
                setSelected(foundItem ?? null);
            } catch (error) {
                console.error("Erreur JSON :", error);
            }
        }
    }, [id]);

    const totalDeposit =
        selected?.deposit?.reduce((acc, tx) => acc + (tx.amount ?? 0), 0) ?? 0;

    const totalWithdrawal =
        selected?.withdrawal?.reduce((acc, tx) => acc + (tx.amount ?? 0), 0) ??
        0;

    const netAmount = totalDeposit - totalWithdrawal;

    const progressValue =
        selected && selected.amount
            ? Math.min((netAmount / selected.amount) * 100, 100)
            : 0;

    function monthsDiff(dateFrom: Date, dateTo: Date): number {
        return (
            dateTo.getMonth() -
            dateFrom.getMonth() +
            12 * (dateTo.getFullYear() - dateFrom.getFullYear())
        );
    }

    const today = new Date();
    const deadlineDate = selected ? new Date(selected.deadline) : null;

    const monthsRemaining = deadlineDate ? monthsDiff(today, deadlineDate) : 0;

    const monthlySavingNeeded =
        selected && selected.amount
            ? monthsRemaining >= 1
                ? Math.ceil(selected.amount / monthsRemaining)
                : selected.amount - netAmount // moins d'un mois, épargner tout
            : 0; // pas de données

    return (
        <div>
            {selected && (
                <>
                    <div className="flex justify-between items-center mt-10">
                        <h2 className="bold text-sm md:text-xl ml-5">
                            {" "}
                            {selected.name}
                        </h2>
                        <img
                            src={ICON_SP}
                            alt="logo_xs"
                            className="h-8 mr-5"
                        />
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="text-center mt-2">
                            <p className="text-xs">Montant épargné</p>
                            <p className="text-2xl font-semibold">
                                {netAmount !== undefined
                                    ? netAmount.toLocaleString() + " €"
                                    : "nope"}
                            </p>
                        </div>

                        {/* Nouveau cercle de progression */}
                        <div className="relative flex items-center justify-center mt-5">
                            <div
                                style={{
                                    position: "relative",
                                    display: "inline-flex",
                                }}
                            >
                                {/* Cercle fond rouge */}

                                <CircularProgress
                                    variant="determinate"
                                    value={100}
                                    size={170}
                                    thickness={3}
                                    sx={{ color: "#1d1d21" }}
                                />
                                {/* Cercle progression bleu */}
                                <CircularProgress
                                    variant="determinate"
                                    value={progressValue}
                                    size={170}
                                    thickness={3}
                                    sx={{
                                        color: "#009CEA",
                                        position: "absolute",
                                        left: 0,
                                        top: 0,
                                    }}
                                />
                            </div>

                            <div className="absolute flex flex-col items-center justify-center ">
                                <p className="text-xs">Objectif</p>
                                <p className="text-2xl font-bold text-[#009CEA]">
                                    {selected.amount}
                                </p>
                                <p className="text-xs mt-2 flex flex-col items-center ">
                                    Avant {""}
                                    <span className="uppercase text-sky-500">
                                        {new Date(
                                            selected.deadline
                                        ).toLocaleDateString("fr-FR", {
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <p className=" text-xs p-3 mt-2 text-center ">
                            Tu dois épargner{" "}
                            <span className="text-base font-bold text-[#009CEA] ">
                                {monthlySavingNeeded}
                            </span>{" "}
                            euros / mois si tu veux atteindre ton objectif :{" "}
                            <span className="text-base font-bold text-[#009CEA] ">
                                Vacances
                            </span>{" "}
                        </p>
                        <div className="w-full px-4">
                            <div className="flex items-center justify-between mt-2 text-xs">
                                <p>Transactions</p>
                                <div className="flex justify-between gap-15">
                                    <span className="text-xs text-[#00FF62]/50">
                                        Dépots = 150 €
                                    </span>
                                    <span className="text-xs text-[#FF0000]/50">
                                        Retrait = 50 €
                                    </span>
                                </div>
                            </div>
                        </div>
                        <ul className="w-full px-5 mt-3 flex flex-col gap-3 overflow-hidden h-[20vh]">
                            {selected && (
                                <>
                                    {selected.deposit.map((depo) => (
                                        <li className="flex w-[92%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs">
                                            <p>Dépôt</p>
                                            <p>{depo.amount}</p>
                                        </li>
                                    ))}
                                    {selected.withdrawal.map((withdraw) => (
                                        <li className="flex w-[92%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs">
                                            <p>Dépôt</p>
                                            <p>{withdraw.amount}</p>
                                        </li>
                                    ))}
                                </>
                            )}
                        </ul>
                    </div>
                </>
            )}

            <div
                onClick={handleDrop}
                className="z-110 absolute right-5 bottom-20"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-plus-icon lucide-plus"
                >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                </svg>
            </div>

            {isOpen && (
                <>
                    <div className="overlay-add-saving absolute top-0 left-0 w-full h-full bg-black/60 z-100 flex flex-col justify-center items-center gap-3 backdrop-blur-[2px]">
                        <p>Ajouter une transaction</p>
                        <select
                            name=""
                            id=""
                            className="mt-2 cursor-pointer w-[40%] min-w-[300px] text-center bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-sm"
                        >
                            <option value="deposit">Dépôt</option>
                            <option value="withdrawal">Retrait</option>
                        </select>
                        <input
                            type="number"
                            placeholder="entrer le montant"
                            className="mt-2 cursor-pointer w-[40%] min-w-[300px] text-center bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-sm"
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default SavingDetails;
