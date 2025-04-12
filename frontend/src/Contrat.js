import React, { useEffect, useRef, useState } from "react";



function Contrat() {

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
    




    const [mesContrats, setMesContrats] = useState([])

    useEffect(() => {
        const dataLocal = localStorage.getItem("mesContrats");
        if (dataLocal) {
            setMesContrats(JSON.parse(dataLocal))
        }
    }, [])



    const supprimerContrat = (idContrat) => {
        // Récupérer les anciens contrats depuis le localStorage
        const dataLocal = localStorage.getItem("mesContrats");

        if (dataLocal) {
            const anciensContrats = JSON.parse(dataLocal);

           

            // Trouver le contrat à supprimer (juste pour vérification)
            const contratToRemove = anciensContrats.find(contrat => contrat.id === idContrat);
            

            // Si on trouve l'élément à supprimer
            if (contratToRemove) {
                // Filtrer la liste pour exclure ce contrat spécifique
                const listeMaj = anciensContrats.filter(contrat => contrat.id !== idContrat);

                // Vérification de la liste après suppression
                

                // Si la liste a été modifiée, mettre à jour le localStorage et l'état
                if (anciensContrats.length !== listeMaj.length) {
                    localStorage.setItem("mesContrats", JSON.stringify(listeMaj));
                    setMesContrats(listeMaj);
                } else {
                    console.log("Aucun contrat supprimé, vérifiez l'ID.");
                }
            } else {
                console.log('Aucun contrat trouvé avec l\'ID :', idContrat);
            }
        }
    };



    const total = mesContrats ? mesContrats.reduce((total, contrat) => total + parseFloat(contrat.prix), 0).toFixed(2) : 0; //si il y a des contrats tu fait un calcul : on creer donc 2 variable : total initialiser a 0 et contrat qui sera float de contrat.prix


    const handleUp = (contratId, e) => {
        e.stopPropagation();  // Prevent event bubbling if necessary
    
        // Find the contract by its ID
        const echeanceUpdate = mesContrats.find(contrat => contrat.id === contratId);
    
        if (!echeanceUpdate) return;  // Handle the case where the contract is not found
    
        // Get the current echeance value and increment it
        const echeanceUp = Number(echeanceUpdate.echeance) + 1;
    
        // Ensure the new echeance is within the range [0, 10]
        const validatedEcheance = Math.min(10, Math.max(0, echeanceUp));
    
        // Map over all contracts to update the specific contract
        const echeanceFinal = mesContrats.map(contrat => 
            contrat.id === contratId ? { ...contrat, echeance: validatedEcheance } : contrat
        );
    
        // Update localStorage and state with the new contracts array
        localStorage.setItem("mesContrats", JSON.stringify(echeanceFinal));
        setMesContrats(echeanceFinal);
    };

    const handleDown = (contratId, e) => {
        e.stopPropagation();  // Prevent event bubbling if necessary
    
        // Find the contract by its ID
        const echeanceUpdate = mesContrats.find(contrat => contrat.id === contratId);
    
        if (!echeanceUpdate) return;  // Handle the case where the contract is not found
    
        // Get the current echeance value and decrement it
        const echeanceDown = Number(echeanceUpdate.echeance) - 1;
    
        // Ensure the new echeance is within the range [0, 10]
        const validatedEcheance = Math.min(10, Math.max(0, echeanceDown));
    
        // Map over all contracts to update the specific contract
        const echeanceFinal = mesContrats.map(contrat => 
            contrat.id === contratId ? { ...contrat, echeance: validatedEcheance } : contrat
        );
    
        // Update localStorage and state with the new contracts array
        localStorage.setItem("mesContrats", JSON.stringify(echeanceFinal));
        setMesContrats(echeanceFinal);
    };
    

    const [openContratId, setOpenContratId] = useState(null);

    const toggleDrop = (contratId) => {
        // Change l'état d'ouverture pour le contrat sélectionné
        if (openContratId === contratId) {
            setOpenContratId(null);  // Si le contrat est déjà ouvert, on le ferme
        } else {
            setOpenContratId(contratId);  // Ouvre le contrat
        }
    };

    const handleUpdate = (contratId) =>{

        const aboUpdate = mesContrats.find(contrat => contrat.id === contratId);
        
        aboUpdate.statusAbo = !aboUpdate.statusAbo

        const aboFinal = mesContrats.map(contrat => contrat.id === contratId ?  aboUpdate  : contrat)

        localStorage.setItem("mesContrats",
            JSON.stringify(aboFinal)
        )
        setMesContrats(aboFinal)
    }



    return (
        <div className="main-content">
            <h2 className="font-bold uppercase text-2xl text-center mt-5">Liste contrats</h2>

            {scrollUp &&
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down
            absolute right-2 top-5
            animate-bounce rotate-180 z-11
            "><path d="m6 9 6 6 6-6" /></svg>
            }



            <div ref={contentRef} className="content overflow-y-scroll h-[calc(100vh-280px)] ">

                <h3 className="font-bold uppercase text-large text-left ml-3 mt-5">Liste abonnements</h3>
                    {mesContrats.filter(contrat => {
                        const abos = contrat.type === "Abonnement";

                        return abos;
                    }).map(contrat => {
                        return (
                            
                                            <ul className="flex justify-center w-[100%] flex-col items-center relative mt-0 gap-3 subpixel-antialiased">

                            <li key={contrat.id} className={`${contrat.statusAbo ? "border-l-[#5B975D]" : "border-l-[#975B5B]" } bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4  rounded-br-[5px] rounded-tr-[5px] drop-figma mt-3`}>
                            <div className="ml-3 flex flex-col justify-between ">
                                <strong className=" text-lg  leading-none">{contrat.nom} | <span className="font-sans text-sm">{contrat.prix} €</span></strong>
                                <p className="text-sm font-sans font-light">{contrat.statusAbo? "Abonnement actif" : "Abonnement Inactif" }</p>
                                <p onClick={() => supprimerContrat(contrat.id)} className="text-[11px]  font-sans text-[#975B5B] cursor-pointer hover:scale-105 transition-all duration-100">Supprimer l'abonnement</p>
                                <p></p>
                            </div>

                            <div className="flex flex-col justify-center leading-none items-end relative group " onClick={() => handleUpdate(contrat.id)}>
                                        <div className={`${contrat.statusAbo ? "bg-[#5B975D]" : "bg-[#975B5B]"} w-12 h-5 rounded-xl
                                        transition-all `}>

                                        <div className={`${contrat.statusAbo ? "right-0": "right-6"} w-6 h-6 bg-white rounded-full absolute top-4 
                                        transition-all  `}></div>

                                        </div>
                                        
                                    </div>
                            </li>
                </ul>
                                )
                            })}

                <h3 className="font-bold uppercase text-large text-left ml-3 mt-5">Liste Paiement x3</h3>

                <ul className="flex justify-center w-[100%] flex-col items-center relative mt-0 gap-3 subpixel-antialiased ">
                            <div className="bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 "></div>

                    {mesContrats.filter(contrat => {
                        const abos = contrat.type === "Paiement x3";

                        return abos;
                    }).map(contrat => {
                        return (
                            <li key={contrat.id} className="bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma">
                            <div className="ml-3 flex flex-col justify-between ">
                                <strong className=" text-lg  leading-none">{contrat.nom} | <span className="font-sans text-sm">{contrat.prix} €</span></strong>
                                <div className="flex items-center gap-2 " >
                                    <svg onClick={(e) => handleDown(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
                                    <p className="text-xs font-sans font-thin ">Echéances : <span className="text-sm font-bold">{contrat.echeance}</span></p>
                                    <svg onClick={(e) => handleUp(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between leading-none items-end relative ">
                                        
                                        <p>{new Date(contrat.datePrlvt).toLocaleDateString()}</p>

                                        <p onClick={() => supprimerContrat(contrat.id)} className="text-[11px]  font-sans text-[#975B5B] cursor-pointer hover:scale-105 transition-all duration-100">Supprimer le contrat</p>
                                    </div>
                            </li>
                        )
                    })}
                </ul>

                <h3 className="font-bold uppercase text-large text-left ml-3 mt-5">Liste Paiement x4</h3>

                <ul className="flex justify-center w-[100%] flex-col items-center relative mt-0 gap-3 subpixel-antialiased ">
                            <div className="bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 "></div>

                    {mesContrats.filter(contrat => {
                        const abos = contrat.type === "Paiement x4";

                        return abos;
                    }).map(contrat => {
                        return (
                            <li key={contrat.id} className="bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma">
                            <div className="ml-3 flex flex-col justify-between ">
                            <strong className=" text-lg  leading-none">{contrat.nom} | <span className="font-sans text-sm">{contrat.prix} €</span></strong>
                                <div className="flex items-center gap-2 " >
                                <svg onClick={(e) => handleDown(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
                                <p className="text-xs font-sans font-thin ">Echéances : <span className="text-sm font-bold">{contrat.echeance}</span></p>
                                <svg onClick={(e) => handleUp(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between leading-none items-end relative ">
                                        
                                        <p>{new Date(contrat.datePrlvt).toLocaleDateString()}</p>

                                        <p onClick={() => supprimerContrat(contrat.id)} className="text-[11px]  font-sans text-[#975B5B] cursor-pointer hover:scale-105 transition-all duration-100">Supprimer le contrat</p>
                                    </div>
                            </li>
                        )
                    })}
                </ul>

                <h3 className="font-bold uppercase text-large text-left ml-3 mt-5">Liste Paiement x10</h3>

                <ul className="flex justify-center w-[100%] flex-col items-center relative mt-0 gap-3 subpixel-antialiased ">
                            <div className="bg-[#5B975D] abolute left-0 top-0 bottom-0 w-1 "></div>

                    {mesContrats.filter(contrat => {
                        const abos = contrat.type === "Paiement x10";

                        return abos;
                    }).map(contrat => {
                        return (
                            <li key={contrat.id} className="bg-[#282830] flex w-[90%] relative justify-between p-3  border-l-4 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma">
                            <div className="ml-3 flex flex-col justify-between ">
                            <strong className=" text-lg  leading-none">{contrat.nom} | <span className="font-sans text-sm">{contrat.prix} €</span></strong>
                                <div className="flex items-center gap-2 " >
                                <svg onClick={(e) => handleDown(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
                                <p className="text-xs font-sans font-thin ">Echéances : <span className="text-sm font-bold">{contrat.echeance}</span></p>
                                <svg onClick={(e) => handleUp(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between leading-none items-end relative ">
                                        
                                        <p>{new Date(contrat.datePrlvt).toLocaleDateString()}</p>

                                        <p onClick={() => supprimerContrat(contrat.id)} className="text-[11px]  font-sans text-[#975B5B] cursor-pointer hover:scale-105 transition-all duration-100">Supprimer le contrat</p>
                                    </div>
                            </li>
                        )
                    })}
                </ul>

                <div class="container-total absolute w-[100%] min-w-[400px] bottom-19  bg-[#282830] p-2">
                    <p className="text-xs">Total :</p>
                    <p className="text-2xl ">{total ? total : 0} €</p>
                </div>

            </div>
            {scrollDown &&
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down
            absolute right-2 bottom-27 z-11
            animate-bounce
            "><path d="m6 9 6 6 6-6" /></svg>
            }
        </div>
    )
}

export default Contrat