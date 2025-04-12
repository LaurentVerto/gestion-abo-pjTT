import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation()

    const [activeTab, setActiveTab] = useState(location.pathname); // ici on recupere l'url avec le pathname pour que le menu reste actif

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    const [overlay, setOverlay] = useState(false)

    const handleVersionOverlay = () => {
        setOverlay(!overlay)
    }

    return (
        <>
        {overlay && 
        
            <div onClick={handleVersionOverlay} className="overlay  w-[100%] h-[100%] bg-black/70 absolute z-10 ">
                <div className="w-[70%] h-auto absolute centerP rounded-lg bg-[#282830] drop-figma p-3">
                    <span className="absolute right-2 top-[-2px] font-sans cursor-pointer">x</span>
                    <h3>Note de version : <span className="font-sans lowercase">v</span>0.1</h3>
                    <ul className="font-sans text-sm list-disc ml-2 mt-3  flex flex-col gap-3">
                        <li className="list-none font-thin ">Onglet Prélèvement
                        <ul className="ml-5 mt-1 font-light text-[12px] ">
                            <li className="list-disc">Ajout du total de prélèvement le 15 et le 30 du mois</li>
                            <li className="list-disc">Liste des contrats</li>
                        </ul>
                        </li>
                        <li className="list-none font-thin "> Onglet Contrats
                            <ul className="ml-5 mt-1 font-light text-[12px] ">
                            <li className="list-disc">Activer / Désactiver Abonnement</li>
                            <li className="list-disc">Supprimer un contrat</li>
                            <li className="list-disc">Ajouter / Retirer échéances</li>
                            </ul>
                        </li>
                        <li className="list-none font-thin "> Onglet Ajouter
                            <ul className="ml-5 mt-1 font-light text-[12px] ">
                            <li className="list-disc">Ajout de contrat</li>
                            <li className="list-disc">Ajout de preset nom de contrat (Netflix, Canal +, Spotify, Deezer, YouTube Music )</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="mt-5 text-center text-xs text-white/20 cursor-pointer">Tap pour fermer</p>
                </div>
            </div>
            }

            <header className="flex justify-center fixed bottom-3 w-[100%]">
                <p onClick={handleVersionOverlay} className="absolute border cursor-pointer rounded-full right-2 bottom-0 w-7 h-7 flex justify-center items-center text-base drop-figma z-20">?</p>


                <p className="absolute text-[9px] bottom-0 left-2 z-15">By <br /> LFPC-DEV</p>
                <nav className="w-[40%] min-w-[350px]">
                    <ul className="flex justify-between w-[100%] p-3 pl-15 pr-15">
                        <NavItem to="/" activeTab={activeTab} setActiveTab={setActiveTab} label="Prélèvements">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </NavItem>

                        <NavItem to="/contrats" activeTab={activeTab} setActiveTab={setActiveTab} label="Contrats">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
                        </NavItem>

                        <NavItem to="/ajouter-contrat" activeTab={activeTab} setActiveTab={setActiveTab} label="Ajouter">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </NavItem>
                    </ul>
                </nav>
            </header>
        </>
    );
}

// Composant réutilisable pour chaque bouton de navigation
function NavItem({ to, activeTab, setActiveTab, label, children }) {
    const isActive = activeTab === to;

    return (
        <li className="relative group top-0" onClick={() => setActiveTab(to)}>
            <Link to={to} className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black"
                    className={`size-9 transition-all duration-300 
                    ${isActive ? "stroke-[#f8f8f8] translate-y-[-8px]" : "group-hover:stroke-[#f8f8f8] group-hover:translate-y-[-8px]"}`}>
                    {children}
                </svg>
                {/* Texte placé exactement comme le hover */}
                <span className={`absolute top-7 text-[#f8f8f8] text-sm font-medium transition-all duration-300 
                ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                    {label}
                </span>
            </Link>
        </li>
    );
}

export default Header;
