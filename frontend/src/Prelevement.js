import React, { useEffect, useState } from "react";
import netflixIcon from "./netflix.png"

function Prelevement() {

    const [mesContrats, setMesContrats] = useState([])


    const trieContrats = mesContrats.sort((a, b) => new Date(a.datePrlvt) - new Date(b.datePrlvt))

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


    return (
        <>
            <h2 className='font-bold uppercase text-2xl text-center mt-5'>Liste prelevements</h2>

            <div className="overflow-y-scroll h-[calc(100vh-150px)]">



                {mesContrats.length === 0 && <p className="text-center mt-5">Aucun contrat enregistré</p>}


                {mesContrats.some(contrat => {
                    const day = new Date(contrat.datePrlvt).getDate();
                    return day <= 15;
                }) && (
                        <ul className="flex justify-center w-[100%] flex-col items-center relative mt-3 gap-3">
                            <div className="bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 "></div>
                            {mesContrats.filter(contrat => {
                                const day = new Date(contrat.datePrlvt).getDate();
                                return day <= 15;
                            }).map(contrat => (
                                <li key={contrat.id} className="bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] ">
                                    <div className="ml-3 flex flex-col justify-between ">
                                        <strong className=" text-lg  leading-none">{contrat.nom}</strong>
                                        <p className="text-sm">Abonnement actif</p>
                                        <p className="text-xs">Echéances restantes : {contrat.echeance}</p>
                                    </div>
                                    <div className="flex flex-col justify-between leading-none items-end">
                                        <p>{new Date(contrat.datePrlvt).toLocaleDateString()}</p>
                                        <p>{contrat.prix} €</p>
                                    </div>
                                </li>
                            ))}
                            <div className="total w-[30%] min-w-[390px] bg-[#282830] h-8 mt-5 text-white flex items-center justify-center drop-figma">
                                <p className="text-sm">Total des prélèvements le 15 du mois
                                    <span className="font-bold text-lg ml-2">




                                        {mesContrats
                                            .filter((contrat) => new Date(contrat.datePrlvt).getDate() <= 15)  // Filtrer les contrats
                                            .reduce((acc, contrat) => acc + (parseFloat(contrat.prix) || 0), 0)  // S'assurer que chaque prix est un nombre valide
                                            .toFixed(2)} €  {/* Formatage à 2 décimales */}
                                    </span>
                                </p>
                            </div>



                        </ul>
                    )}




                {listeAffichage > 0 && (
                    <div>


                        {mesContrats.some(contrat => {
                            const day = new Date(contrat.datePrlvt).getDate();
                            return day <= 15;
                        }) && (
                                <ul className="mt-5">
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
                            <p className="text-sm">Total des prélèvements après le 30 du mois
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
            </div>
        </>
    )
}

export default Prelevement;