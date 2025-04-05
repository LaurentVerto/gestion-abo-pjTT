import React, { useEffect, useState } from "react";
import netflixIcon from "./netflix.png"

function Prelevement() {

    const [mesContrats, setMesContrats] = useState([])

    useEffect(() => {
        const dataLocal = localStorage.getItem("mesContrats");
        if (dataLocal) {
            setMesContrats(JSON.parse(dataLocal))
        }
    }, [])

    const total = mesContrats ? mesContrats.reduce((total, contrat) => total + parseFloat(contrat.prix), 0).toFixed(2) : 0;
    //si il y a des contrats tu fait un calcul : on creer donc 2 variable : total initialiser a 0 et contrat qui sera float de contrat.prix


    const listeAffichage = mesContrats
        .filter((contrat) => new Date(contrat.datePrlvt).getDate() > 15)  // Filtrer les contrats
        .reduce((acc, contrat) => acc + (parseFloat(contrat.prix) || 0), 0)  // S'assurer que chaque prix est un nombre valide
        .toFixed(2);

        console.log(listeAffichage);
        
        

    return (
        <>
            <h2 className='font-bold uppercase text-2xl text-center mt-5'>Liste prelevements</h2>


            {mesContrats.some(contrat => {
                const day = new Date(contrat.datePrlvt).getDate();
                return day <= 15;
            }) && (
                    <ul className="mt-15">
                        {mesContrats.filter(contrat => {
                            const day = new Date(contrat.datePrlvt).getDate();
                            return day <= 15;
                        }).map(contrat => (
                            <li key={contrat.id} className="flex gap-5 items-center justify-center mt-2">
                                <p className="font-bold">{new Date(contrat.datePrlvt).getDate()}</p>
                                <div className="flex shadow-inner w-[80%] min-w-[300px] justify-between p-3 pr-5 pl-5 rounded-lg items-center">
                                    <div className="flex gap-10 items-center">
                                        <img src={contrat.image} alt="" className="object-cover w-8 h-8 rounded-lg" />
                                        <p>{contrat.nom}</p>
                                    </div>
                                    <p className="font-bold">{contrat.prix} €</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            <div className="total w-[30%] min-w-[390px] bg-black h-8 mt-5 text-white flex items-center justify-center rounded-lg rounded-bl-none rounded-tl-none">
                <p className="text-base">Total des prélèvements après le 15 du mois
                    <span className="font-bold text-large ml-2">
                        {mesContrats
                            .filter((contrat) => new Date(contrat.datePrlvt).getDate() <= 15)  // Filtrer les contrats
                            .reduce((acc, contrat) => acc + (parseFloat(contrat.prix) || 0), 0)  // S'assurer que chaque prix est un nombre valide
                            .toFixed(2)} €  {/* Formatage à 2 décimales */}
                    </span>
                </p>
            </div>
            {listeAffichage >0 && (
            <div>


            {mesContrats.some(contrat => {
                const day = new Date(contrat.datePrlvt).getDate();
                return day <= 15;
            }) && (
                <ul className="mt-15">
                        {mesContrats.filter(contrat => {
                            const day = new Date(contrat.datePrlvt).getDate();
                            return day > 15;
                        }).map(contrat => (
                            <li key={contrat.id} className="flex gap-5 items-center justify-center mt-2">
                                <p className="font-bold">{new Date(contrat.datePrlvt).getDate()}</p>
                                <div className="flex shadow-inner w-[80%] min-w-[300px] justify-between p-3 pr-5 pl-5 rounded-lg items-center">
                                    <div className="flex gap-10 items-center">
                                        <img src={contrat.image} alt="" className="object-cover w-8 h-8 rounded-lg" />
                                        <p>{contrat.nom}</p>
                                    </div>
                                    <p className="font-bold">{contrat.prix} €</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}


                

                    <div className="total w-[30%] min-w-[390px] bg-black h-8 mt-5 text-white flex items-center justify-center rounded-lg rounded-bl-none rounded-tl-none font-large">
                <p>Total des prélèvements après le 30 du mois
                    <span className="font-bold text-large ml-2">
                        {mesContrats
                            .filter((contrat) => new Date(contrat.datePrlvt).getDate() > 15)  // Filtrer les contrats
                            .reduce((acc, contrat) => acc + (parseFloat(contrat.prix) || 0), 0)  // S'assurer que chaque prix est un nombre valide
                            .toFixed(2)} € 
                    </span>
                </p>
            </div>
                            </div>
    )}
        </>
    )
}

export default Prelevement;