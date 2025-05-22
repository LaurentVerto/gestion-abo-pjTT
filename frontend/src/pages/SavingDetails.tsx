import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const ICON_SP = "/logo-xs.png";

function SavingDetails() {
    return (
        <div>
            <div className="flex justify-between items-center mt-10">
                <h2 className="bold text-sm md:text-xl ml-5">
                    {" "}
                    💻 Test Epargnes
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
                    <p className="text-2xl font-semibold">5 800 €</p>
                </div>

                {/* Nouveau cercle de progression */}
                <div className="relative flex items-center justify-center mt-5">
                    <div
                        style={{ position: "relative", display: "inline-flex" }}
                    >
                        {/* Cercle fond rouge */}
                        
                        <CircularProgress
                            variant="determinate"
                            value={100}
                            size={200}
                            thickness={3}
                            sx={{ color: "#1d1d21" }}
                        />
                        {/* Cercle progression bleu */}
                        <CircularProgress
                            variant="determinate"
                            value={90}
                            size={200}
                            thickness={3}
                            sx={{
                                color: "#009CEA",
                                position: "absolute",
                                left: 0,
                                top: 0,
                            }}
                        />
                    </div>

                    <div className="absolute flex flex-col items-center justify-center">
                        <p className="text-xs">Objectif</p>
                        <p className="text-2xl font-bold text-[#009CEA]">
                            10 000 €
                        </p>
                        <p className="text-xs mt-2">Avant Juillet 2025</p>
                    </div>
                </div>
                <p className=" text-xs p-3 mt-2 text-center ">Tu dois épargner <span className="text-base font-bold text-[#009CEA] ">100</span> euros / mois si tu veux atteindre ton objectif : <span className="text-base font-bold text-[#009CEA] ">Vacances</span> </p>
                <div className="w-full px-4">
                    <div className="flex items-center justify-between mt-2 text-xs">
                        <p>Transactions</p>
                        <div className="flex justify-between gap-15">
                            <span className="text-xs text-[#00FF62]/50">Dépots = 150 €</span>
                            <span className="text-xs text-[#FF0000]/50">Retrait = 50 €</span>
                        </div>
                    </div>
                </div>
                <ul className="w-full px-5 mt-3 flex flex-col gap-3 overflow-hidden h-[20vh]">
                    <li className="flex w-[100%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs">
                        <p>Dépôt</p>
                        <p>150 €</p>
                    </li>
                    <li className="flex w-[100%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs">
                        <p>Dépôt</p>
                        <p>150 €</p>
                    </li>
                    <li className="flex w-[100%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs">
                        <p>Dépôt</p>
                        <p>150 €</p>
                    </li>
                    <li className="flex w-[100%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs">
                        <p>Dépôt</p>
                        <p>150 €</p>
                    </li>
                </ul>
            </div>
            
            
        </div>
    );
}

export default SavingDetails;
