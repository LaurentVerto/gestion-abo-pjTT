import React, { useState } from "react";
import iconSp from './logo-xs.png'

function Version() {

    const [overlay, setOverlay] = useState(false)

    const handleVersionOverlay = () => {
        setOverlay(!overlay)
    }

    return(
        <>

        <img src={iconSp} alt="logo_back" className=" centerP absolute z-1 opacity-3 pointer-events-none"/>

        <p className="absolute text-[9px] top-2 left-2 z-15">By <br /> LFPC-DEV</p>

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
                <p className="text-xs m-4 text-center">⚠️ Le navigateur ne doit pas être en privé pour la sauvegarde de vos contrats</p>
                <p className="mt-5 text-center text-xs text-white/20 cursor-pointer">Tap pour fermer</p>
            </div>
        </div>
        }
        <p onClick={handleVersionOverlay} className="absolute border cursor-pointer rounded-full right-2 top-2 w-7 h-7 flex justify-center items-center text-base drop-figma z-20">?</p>
        </>
    )
}

export default Version;