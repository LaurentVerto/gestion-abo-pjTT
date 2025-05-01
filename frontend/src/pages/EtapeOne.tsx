import React from "react";
import { Link } from "react-router-dom";
const ICON_SP = "/logo-xs.png";
const etapeOne = "/etapeOne.png";

function EtapeOne() {
    return (
        <>
            <div className=" main-content container bg-[#1d1d21] w-[100vw] h-[100vh] z-25 fontAbe pb-0  overflow-y-scroll">
                <div className="flex justify-center  ">
                    <img src={ICON_SP} alt="logo-xs" className="h-20 left-2 top-2 fixed" />
                    <div className="mt-5 self-center">
                        <p className="text-[#f8f8f8]  ">Bienvenue sur</p>
                        <h1 className="text-black text-xl linear-title font-bold text-center">SplitPay</h1>
                    </div>
                </div>
                <div className="point-design flex justify-center gap-15 mt-10">
                    <div className="bg-[#60A8FE] w-2.5 h-2.5 rounded-full shadow-md"></div>
                    <div className="bg-[#f8f8f8] w-2.5 h-2.5 rounded-full shadow-md"></div>
                    <div className="bg-[#f8f8f8] w-2.5 h-2.5 rounded-full shadow-md"></div>
                </div>
                <div className="p-10 text-xs ">
                    <p className="fontAbe font-bold">
                    Pour bien enregistrer un contrat, vous devez renseigner les informations suivantes :
                    </p>
                    
                    <ul className="list-disc ml-10 ">
                        <li className="mt-2">Le nom du contrat (exemple : Netflix, Assurance Auto, etc.)</li>
                        <li className="mt-2">La date de prélèvement (le jour où le montant est débité, par exemple le 5 du mois)</li>
                        <li className="mt-2">Le montant prélevé (exemple : 29,99 €)
                        </li>
                        <li className="mt-2">
                        Le type de contrat :
                            <ul className="ml-10 list-disc">
                                <li className="mt-2"> Abonnement (paiement régulier tous les mois, etc.)</li>
                                <li className="mt-2">Paiement en plusieurs fois (un montant total divisé sur plusieurs échéances)</li>
                            </ul>
                        </li>
                    </ul>
                <img src={etapeOne} alt="image etape" className="mt-10 ml-10 mb-10" />
                <div className="flex justify-center mb-10">
                    <Link to="/EtapeTwo" className="bg-gray-500 p-2 rounded-lg animate-pulse ">Etape Suivante</Link>
                </div>
                <div className="flex justify-center mb-10">
                    <Link to="/EtapeTwo" className="bg-[#60A8FE] p-2 rounded-lg text-black ">Entrer dans le site</Link>
                </div>
                <div className="flex justify-center mb-20">
                    <Link to="/prelevements" className="bg-[#60A8FE] p-2 rounded-lg text-black ">Entrer dans le site</Link>
                </div>
                </div>
            </div>
        </>
    )
}

export default EtapeOne