import React from "react";
import { Link } from "react-router-dom";

const ICON_SP = "/logo-xs.png";
const etapeOne = "/etapeOne.png";

function EtapeOne() {
    return (
        <div className="main-content  bg-[#1d1d21] w-full h-screen fontAbe pb-0 overflow-y-scroll relative min-height-10
        ">

            {/* SVG de fond (arrière-plan)
            <div className="absolute h-[15dvh] bg-[#f8f8f8] w-full z-0 top-[0dvh] 
            md:top-[0dvh] md:h-[0px] md:max-height-[768px]"></div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute top-[13dvh] 
                left-0 w-full z-2
                md:top-[0px]
                
                "
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
                className="absolute top-[15dvh] md:top-[10px] left-0 w-full z-1"
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
            </svg> */}

            {/* Contenu principal */}
            <div className="relative z-10 flex justify-center ">
                <img src={ICON_SP} alt="logo-xs" className="h-20 left-2 top-10 fixed" />
                <div className="mt-5 self-center">
                    <p className="text-[#f8f8f8] ">Bienvenue sur</p>
                    <h1 className="text-black text-xl linear-title font-bold text-center">SplitPay</h1>
                </div>
            </div>

            <div className="point-design flex justify-center gap-4 mt-[4dvh] relative z-10">
                <div className="bg-[#60A8FE] w-2.5 h-2.5 rounded-full shadow-md"></div>
                <div className="bg-[#f8f8f8] w-2.5 h-2.5 rounded-full shadow-md"></div>
                <div className="bg-[#f8f8f8] w-2.5 h-2.5 rounded-full shadow-md"></div>
            </div>

            <div className="p-10 text-xs relative flex flex-col items-center z-10 mt-[5dvh] md:mt-[15dvh]">
                <p className="font-bold ">
                    Pour bien enregistrer un contrat, vous devez renseigner les informations suivantes :
                </p>

                <ul className="list-disc ml-10 mt-2 space-y-2">
                    <li>Le nom du contrat (exemple : Netflix, Assurance Auto, etc.)</li>
                    <li>La date de prélèvement (le jour où le montant est débité, par exemple le 5 du mois)</li>
                    <li>Le montant prélevé (exemple : 29,99 €)</li>
                    <li>
                        Le type de contrat :
                        <ul className="ml-10 list-disc mt-2 space-y-2">
                            <li>Abonnement (paiement régulier tous les mois, etc.)</li>
                            <li>Paiement en plusieurs fois (un montant total divisé sur plusieurs échéances)</li>
                        </ul>
                    </li>
                </ul>

                <img src={etapeOne} alt="image etape" className="mt-10 ml-10 mb-20" />

                <div className="flex justify-center mb-5">
                    <Link to="/EtapeTwo" className="bg-gray-500 p-2 rounded-lg animate-pulse text-white">
                        Étape Suivante
                    </Link>
                </div>

                <div className="flex justify-center mb-20">
                    <Link to="/prelevements" className="bg-[#60A8FE] p-2 rounded-lg text-black">
                        Entrer dans le site
                    </Link>
                </div>
            </div>

            

        {/* <div className="absolute h-40 -bottom-[60dvh] md:hidden  bg-[#f8f8f8] w-[100vw] z-0 "></div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute rotate-180 -bottom-[36dvh] md:hidden  left-0 w-full z-2"
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
            className="absolute rotate-180 -bottom-[34dvh] md:hidden  left-0 w-full z-1"
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
        </svg> */}
        </div>
    );
}

export default EtapeOne;
