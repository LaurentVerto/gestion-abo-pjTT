import React from "react";
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
                <div stroke-dasharray="80,100" className="outline-30 outline-[#0074FF]  flex flex-col items-center justify-center gap-5 mt-15 p-8 aspect-square rounded-full relative ">
                    <div className="text-center">
                        <p className="text-xs">Objectif</p>
                        <p className="text-3xl font-bold text-[#009CEA]">10 000 €</p>
                    </div>
                    <p className="text-sm">Avant Juillet 2025</p>
                </div>
            </div>
        </div>
    );
}

export default SavingDetails;
