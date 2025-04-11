import React, { useEffect, useRef, useState } from "react";
import netflixIcon from "./netflix.png"

function Prelevement() {

    const [mesContrats, setMesContrats] = useState([])
    const contentRef = useRef(null);
    const [scrollUp, setScrollUp] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);


    useEffect(() => {
        const content = contentRef.current;
        if (content) {
            // Vérifie si le contenu est plus grand que l'espace visible
            const isScrollable = content.scrollHeight > content.clientHeight;

            // Si le contenu est plus grand que l'espace visible, on affiche la flèche vers le bas
            setScrollDown(isScrollable);

            // Vérifie si on a déjà scrollé vers le haut (par exemple après un petit défilement)
            setScrollUp(content.scrollTop > 0);

            // Ajout de l'événement scroll pour mise à jour dynamique
            const handleScroll = () => {
                setScrollUp(content.scrollTop > 0);  // Si on a scrollé vers le haut
                setScrollDown(content.scrollHeight - content.scrollTop > content.clientHeight);  // Si on peut encore scroller vers le bas
            };

            content.addEventListener('scroll', handleScroll);

            // Nettoyage de l'événement lors du démontage du composant
            return () => content.removeEventListener('scroll', handleScroll);
        }
    }, []);  // Dépendances vides => s'exécute une seule fois après le premier rendu

    // Ajout d'un effet supplémentaire pour forcer la mise à jour après le premier rendu
    useEffect(() => {
        const timeout = setTimeout(() => {
            const content = contentRef.current;
            if (content) {
                // Vérifie de nouveau si le contenu est plus grand que l'espace visible
                const isScrollable = content.scrollHeight > content.clientHeight;
                setScrollDown(isScrollable);
            }
        }, 50); // Timeout à 0 pour qu'il se produise après le premier rendu complet

        return () => clearTimeout(timeout);
    }, []);


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
        <div className="main-content">
            <h2 className='font-bold uppercase text-2xl text-center mt-5'>Liste prelevements</h2>

            {scrollUp &&
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down
            absolute right-2 top-5
            animate-bounce rotate-180 z-11
            "><path d="m6 9 6 6 6-6" /></svg>
            }

            <div ref={contentRef} className="overflow-y-scroll h-[calc(100vh-220px)]">



                {mesContrats.length === 0 && <p className="text-center mt-5">Aucun contrat enregistré</p>}


                {mesContrats.some(contrat => {
                    const day = new Date(contrat.datePrlvt).getDate();
                    return day <= 15 && contrat.statusAbo === true;
                }) && (
                        <ul className="flex justify-center w-[100%] flex-col items-center relative mt-3 subpixel-antialiased gap-3 ">
                            <div className="bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 "></div>
                            {mesContrats.filter(contrat => {
                                const day = new Date(contrat.datePrlvt).getDate();
                                return day <= 15 && contrat.statusAbo === true;
                            }).map(contrat => (
                                <li key={contrat.id} className="bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma">
                                    {contrat.type === "Abonnement" ? (
                                        <div className="ml-3 flex flex-col justify-between ">
                                            <strong className="text-lg leading-none">{contrat.nom}</strong>
                                            <p className="text-sm font-sans font-light">Abonnement actif</p>
                                        </div>
                                    ) : (
                                        <div className="ml-3 flex flex-col justify-between ">
                                            <strong className="text-lg leading-none">{contrat.nom}</strong>
                                            <p className="text-sm font-sans font-light">Echéances restantes : <span className="text-sm font-bold">{contrat.echeance}</span></p>
                                        </div>
                                    )}

                                    <div className="flex flex-col justify-between leading-none items-end">
                                        <p className="font-sans text-xs">{new Date(contrat.datePrlvt).toLocaleDateString()}</p>
                                        <p>{contrat.prix} €</p>
                                    </div>
                                </li>
                            ))}
                            <div className="total w-[100%] min-w-[390px] bg-[#282830] h-8 text-white flex items-center justify-center drop-figma">
                                <p className="text-sm font-sans">Total des prélèvements le 15 du mois
                                    <span className="font-bold text-lg ml-2">




                                        {mesContrats
                                            .filter((contrat) => new Date(contrat.datePrlvt).getDate() <= 15 && contrat.statusAbo === true)  // Filtrer les contrats
                                            .reduce((acc, contrat) => acc + (parseFloat(contrat.prix) || 0), 0)  // S'assurer que chaque prix est un nombre valide
                                            .toFixed(2)} €
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
                                <ul className="flex justify-center w-[100%] flex-col items-center relative mt-3 subpixel-antialiased mt-5 gap-3">
                                    {mesContrats.filter(contrat => {
                                        const day = new Date(contrat.datePrlvt).getDate();
                                        return day > 15;
                                    }).map(contrat => (
                                        <li key={contrat.id} className="bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma">
                                            {contrat.type === "Abonnement" ? (
                                                <div className="ml-3 flex flex-col justify-between ">
                                                    <strong className="text-lg leading-none">{contrat.nom}</strong>
                                                    <p className="text-sm font-sans font-light">Abonnement actif</p>
                                                </div>
                                            ) : (
                                                <div className="ml-3 flex flex-col justify-between ">
                                                    <strong className="text-lg leading-none">{contrat.nom}</strong>
                                                    <p className="text-sm font-sans font-light">Echéances restantes : <span className="text-sm font-bold">{contrat.echeance}</span> </p>
                                                </div>
                                            )}
                                            <div className="flex flex-col justify-between leading-none items-end">
                                                <p className="font-sans text-xs">{new Date(contrat.datePrlvt).toLocaleDateString()}</p>
                                                <p>{contrat.prix} €</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}




                        <div className="total w-[100%] min-w-[390px] bg-[#282830] h-8 mt-3 text-white flex items-center justify-center drop-figma">
                            <p className="text-sm font-sans">Total des prélèvements le 30 du mois
                                <span className="font-bold text-lg ml-2">
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
            {scrollDown &&
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down
            absolute right-2 bottom-13 z-11
            animate-bounce
            "><path d="m6 9 6 6 6-6" /></svg>
            }
        </div>
    )
}

export default Prelevement;