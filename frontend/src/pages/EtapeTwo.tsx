import React from "react";
import { Link } from "react-router-dom";

const ICON_SP = "/logo-xs.png";
const etapeTwo = "/etapeTwo.png";

function EtapeTwo() {
    return (
        <>
            <div className="main-content container bg-[#1d1d21] w-screen h-screen fontAbe pb-0 overflow-y-scroll relative ">

                {/* SVG de fond (arrière-plan) */}
                <div className="absolute h-30 bg-[#f8f8f8] w-[100vw] z-0"></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="absolute top-23 left-0 w-full z-2"
                >
                    <path
                        fill="#f8f8f8"
                        fillOpacity="1"
                        d="M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z"
                    />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="absolute top-26 left-0 w-full z-1"
                >
                    <defs>
                        <linearGradient id="monDegrade" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#60A8FE" />
                            <stop offset="100%" stopColor="#4950FF" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#monDegrade)"
                        fillOpacity="1"
                        d="M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z"
                    />
                </svg>



                <div className="relative z-10 flex justify-center">
                    <img src={ICON_SP} alt="logo-xs" className="h-20 left-2 top-10 fixed" />
                    <div className="mt-5 self-center">
                        <p className="text-[#f8f8f8] text-black">Bienvenue sur</p>
                        <h1 className="text-black text-xl linear-title font-bold text-center">SplitPay</h1>
                    </div>
                </div>

                <div className="point-design flex justify-center gap-4 mt-10 relative z-10">
                    <div className="bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md"></div>
                    <div className="bg-[#60A8FE] w-2.5 h-2.5 rounded-full shadow-md"></div>
                    <div className="bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md"></div>
                </div>


                <div className="p-10 text-xs relative z-10 mt-5 ">
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
                    <img src={etapeTwo} alt="image etape" className="mt-10 ml-10 mb-28" />
                    <div className="flex justify-center gap-10 mb-5">
                        <Link to="/EtapeOne" className="bg-gray-700 p-2 rounded-lg ">Etape Précédente</Link>
                        <Link to="/EtapeThree" className="bg-gray-500 p-2 rounded-lg animate-pulse ">Etape Suivante</Link>
                    </div>
                    <div className="flex justify-center mb-20">
                        <Link to="/prelevements" className="bg-[#60A8FE] p-2 rounded-lg text-black ">Entrer dans le site</Link>
                    </div>
                </div>

                <div className="absolute h-33 -bottom-80 bg-[#f8f8f8] w-[100vw] z-0"></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="absolute rotate-180 -bottom-50 left-0 w-full z-2"
                >
                    <path
                        fill="#f8f8f8"
                        fillOpacity="1"
                        d="M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z"
                    />
                </svg>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    className="absolute rotate-180 -bottom-47 left-0 w-full z-1"
                >
                    <defs>
                        <linearGradient id="monDegrade" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#60A8FE" />
                            <stop offset="100%" stopColor="#4950FF" />
                        </linearGradient>
                    </defs>
                    <path
                        fill="url(#monDegrade)"
                        fillOpacity="1"
                        d="M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z"
                    />
                </svg>
            </div>
        </>
    )
}

export default EtapeTwo;