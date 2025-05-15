import React from "react";
import { Link } from "react-router-dom";
const ICON_SP = "/logo-xs.png";

function Accueil() {
    return (
        <>
        
            <div className=" bg-white w-[100vw] h-[100dvh] z-0 fontAbe border-red-500  ">
                <div className="absolute h-30 bg-[#1d1d21] w-[100vw] z-1"></div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute mt-29 z-1">

                    <path fill="#1d1d21" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute mt-33 z-0">
                    <defs>
                        <linearGradient id="monDegrade" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="#60A8FE" />
                            <stop offset="100%" stop-color="#4950FF" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#monDegrade)" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                </svg>

                <div className="flex justify-center h-40 mt-0 ">
                    <img src={ICON_SP} alt="logo-xs" className="absolute z-1 h-35" />
                </div>

                <div className="flex flex-col justify-center items-center mt-[10dvh]">
                    <p className="text-black">Bienvenue sur</p>
                    <h1 className="text-black text-xl linear-title font-bold ">SplitPay</h1>
                    <p className="text-black w-80 text-justify mt-10 text-sm">Une application qui vous permet d’avoir, en un coup d’œil, une vue claire de vos abonnements et de vos paiements en plusieurs fois.</p>
                </div>

                <div className="point-design flex justify-center gap-15 mt-10">
                    <div className="bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md"></div>
                    <div className="bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md"></div>
                    <div className="bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md"></div>
                </div>

                <div className="w-[100%] flex justify-center mt-10">

                    <div className="bg-[#1d1d21] w-18 h-18 rounded-full flex justify-center items-center">
                    <Link to="/EtapeOne">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </Link>
                    </div>
                </div>

                
                
            </div>
            </>
    )
}

export default Accueil;