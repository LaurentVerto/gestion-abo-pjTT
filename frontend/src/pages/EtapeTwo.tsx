import React from "react";
import { Link } from "react-router-dom";

const ICON_SP = "/logo-xs.png";
const etapeTwo = "/etapeTwo.png";

function EtapeTwo() {
    return(
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
                    <div className="bg-[#f8f8f8] w-2.5 h-2.5 rounded-full shadow-md"></div>
                    <div className="bg-[#60A8FE] w-2.5 h-2.5 rounded-full shadow-md"></div>
                    <div className="bg-[#f8f8f8] w-2.5 h-2.5 rounded-full shadow-md"></div>
                </div>
                <div className="p-10 text-xs ">
                    <p className="fontAbe font-bold">
                    Une fois le contrat enregistré :
                    </p>
                    
                    <ul className="list-disc ml-10 ">
                        <li className="mt-2">Rendez-vous dans la section Onglets pour retrouver tous vos contrats.</li>
                        <li className="mt-2">Vous pouvez supprimer un contrat à tout moment si nécessaire.
                        </li>
                        <li className="mt-2">
                        Pour les abonnements, vous avez le choix entre :
                            <ul className="ml-10 list-disc">
                                <li className="mt-2">  supprimer définitivement le contrat</li>
                                <li className="mt-2">le désactiver temporairement pour une période donnée.</li>
                            </ul>
                        </li>
                    </ul>
                <img src={etapeTwo} alt="image etape" className="mt-10 ml-10 mb-10" />
                <div className="flex justify-center gap-10 mb-10">
                    <Link to="/EtapeOne" className="bg-gray-700 p-2 rounded-lg ">Etape Précédente</Link>
                    <Link to="/EtapeThree" className="bg-gray-500 p-2 rounded-lg animate-pulse ">Etape Suivante</Link>
                </div>
                <div className="flex justify-center mb-20">
                                    <Link to="/prelevements" className="bg-[#60A8FE] p-2 rounded-lg text-black ">Entrer dans le site</Link>
                                </div>
                </div>
            </div>
        </>
    )
}

export default EtapeTwo;