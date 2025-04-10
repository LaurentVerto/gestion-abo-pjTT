import React, { useEffect, useRef, useState } from "react";



function Contrat() {

    const contentRef = useRef(null);
    const [scrollUp, setScrollUp] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);

    useEffect(() => {
        const content = contentRef.current;
        if (content) {
            const handleScroll = () => {
                setScrollUp(content.scrollTop > 0);
                setScrollDown(content.scrollHeight > content.clientHeight);
            };

            handleScroll(); // Pour l'état initial
            content.addEventListener('scroll', handleScroll);
            return () => content.removeEventListener('scroll', handleScroll);
        }
    }, []);



    const [mesContrats, setMesContrats] = useState([])

    useEffect(() => {
        const dataLocal = localStorage.getItem("mesContrats");
        if (dataLocal) {
            setMesContrats(JSON.parse(dataLocal))
        }
    }, [])

    //liste contrat via BDD

    // const [listeContrats, setListeContrats] = useState([])

    // useEffect(() => {

    //     const fetchData = async () => {


    //         try {
    //             const response = await fetch('/contrats/liste-contrats');

    //             const data = await response.json();
    //             setListeContrats(data);


    //         } catch (error) {
    //             console.error("Erreur survenu lors de la récuperation de la liste : ", error)
    //         }

    //     }
    //     fetchData();
    // }, []);

    //


    const supprimerContrat = (idContrat) => {
        // Récupérer les anciens contrats depuis le localStorage
        const dataLocal = localStorage.getItem("mesContrats");

        if (dataLocal) {
            const anciensContrats = JSON.parse(dataLocal);

            // Vérification de l'ID des contrats avant la suppression
            console.log("Liste des contrats avant la suppression : ", anciensContrats.map(contrat => contrat.id));

            // Trouver le contrat à supprimer (juste pour vérification)
            const contratToRemove = anciensContrats.find(contrat => contrat.id === idContrat);
            console.log('Contrat à supprimer :', contratToRemove);

            // Si on trouve l'élément à supprimer
            if (contratToRemove) {
                // Filtrer la liste pour exclure ce contrat spécifique
                const listeMaj = anciensContrats.filter(contrat => contrat.id !== idContrat);

                // Vérification de la liste après suppression
                console.log("Liste après filtrage : ", listeMaj.map(contrat => contrat.id));

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


    const handleUp = (contratId, e ) => {

        e.stopPropagation();

        const echeanceUpdate = mesContrats.find(contrat => contrat.id === contratId);

        const echeanceUp = Number(echeanceUpdate.echeance) + 1;


        const echeanceFinal = mesContrats.map(contrat => contrat.id === contratId ? { ...contrat, echeance: echeanceUp } : contrat)

        localStorage.setItem("mesContrats",
            JSON.stringify(echeanceFinal)
        )
        setMesContrats(echeanceFinal)
    }

    const handleDown = (contratId, e ) => {
        e.stopPropagation();

        const echeanceUpdate = mesContrats.find(contrat => contrat.id === contratId);

        const echeanceUp = Number(echeanceUpdate.echeance) - 1;


        const echeanceFinal = mesContrats.map(contrat => contrat.id === contratId ? { ...contrat, echeance: echeanceUp } : contrat)

        localStorage.setItem("mesContrats",
            JSON.stringify(echeanceFinal)
        )
        setMesContrats(echeanceFinal)
    }

    const [openContratId, setOpenContratId] = useState(null);

    const toggleDrop = (contratId) => {
        // Change l'état d'ouverture pour le contrat sélectionné
        if (openContratId === contratId) {
            setOpenContratId(null);  // Si le contrat est déjà ouvert, on le ferme
        } else {
            setOpenContratId(contratId);  // Ouvre le contrat
        }
    };

    return (
        <div className="main-content">
            <h2 className="font-bold uppercase text-2xl text-center mt-5">Liste contrats</h2>

{scrollUp && 
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down
            absolute right-2
            animate-bounce rotate-180
            "><path d="m6 9 6 6 6-6"/></svg>
}

           

            <div ref={contentRef} className="content overflow-y-scroll h-[calc(100vh-210px)] ">

                <h3 className="font-bold uppercase text-large text-left ml-3 mt-5">Liste abonnements</h3>

                <ul>


                    {mesContrats.filter(contrat => {
                        const abos = contrat.type === "Abonnement";

                        return abos;
                    }).map(contrat => {
                        return (
                            <li className="flex items-center justify-center mt-2">
                                <div className="group">
                                </div>


                                <div className="flex flex-col shadow-inner w-[60%] min-w-[270px] justify-between p-3 pr-5 pl-5 rounded-lg items-center " key={contrat.id}>
                                    <div className="flex   w-[100%] min-w-[270px] justify-between p-3 pr-5 pl-5 rounded-lg items-center ">


                                        <div className="flex gap-10 items-center">

                                            <img className="h-8 w-8 object-cover rounded-lg" src={contrat.image} alt="" />

                                            <p>{contrat.nom}</p>

                                        </div>

                                        <p className="font-bold">{contrat.prix} €</p>

                                    </div>




                                </div>


                                <div className="group" onClick={() => supprimerContrat(contrat.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke=" #B91C1C" class="cursor-pointer size-8 ml-5 transition-all groupe-hover group-hover:stroke-red-800 group-hover:scale-110 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </div>
                            </li>
                        )
                    })}
                </ul>

                <h3 className="font-bold uppercase text-large text-left ml-3 mt-5">Liste Paiement x3</h3>
                {mesContrats.filter(contrat => {
                    const abos = contrat.type === "Paiement x3";

                    return abos;
                }).map(contrat => {
                    return (


                        <li onClick={() => toggleDrop(contrat.id)} className="flex items-center justify-center mt-1" key={contrat.id}>
                            <div className="group">
                            </div>


                            <div className="flex flex-col shadow-inner w-[60%] min-w-[270px] justify-between p-3 pr-5 pl-5 rounded-lg items-center " key={contrat.id}>
                                <div className="flex   w-[100%] min-w-[270px] justify-between p-3 pr-5 pl-5 rounded-lg items-center ">



                                    <div className="flex gap-10 items-center">

                                        <img className="h-8 w-8 object-cover rounded-lg" src={contrat.image} alt="" />

                                        <p>{contrat.nom}</p>

                                    </div>

                                    <p className="font-bold">{contrat.prix} €</p>

                                </div>


                                <div className={`dropdown flex items-center justify-center gap-5 transition-all duration-500 ease-in-out overflow-hidden ${openContratId === contrat.id ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0'}`}>

                                    <svg onClick={(e) => handleDown(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-minus-icon lucide-minus
                                    
                                    hover:scale-140
                                    cursor-pointer
                                    hover:text-black/100
                                    "><path d="M5 12h14" /></svg>

                                    <p className="text-xs"> {""}
                                        {contrat.echeance} Echéances </p>

                                    <svg onClick={(e) => handleUp(contrat.id,e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus
                                        
                                        hover:scale-140
                                    cursor-pointer
                                    hover:text-black/100"><path d="M5 12h14" /><path d="M12 5v14" /></svg>


                                </div>


                            </div>
                            <div className="group" onClick={() => supprimerContrat(contrat.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke=" #B91C1C" class="cursor-pointer size-8 ml-5 transition-all groupe-hover group-hover:stroke-red-800 group-hover:scale-110 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </li>
                    )
                })}

                <h3 className="font-bold uppercase text-large text-left ml-3 mt-5">Liste Paiement x4</h3>

                {mesContrats.filter(contrat => {
                    const abos = contrat.type === "Paiement x4";

                    return abos;
                }).map(contrat => {
                    return (


                        <li onClick={() => toggleDrop(contrat.id)} className="flex items-center justify-center mt-2" key={contrat.id}>
                            <div className="group">
                            </div>


                            <div className="flex flex-col shadow-inner w-[60%] min-w-[270px] justify-between p-3 pr-5 pl-5 rounded-lg items-center " key={contrat.id}>
                                <div className="flex   w-[100%] min-w-[270px] justify-between p-3 pr-5 pl-5 rounded-lg items-center ">

                                    <div className="flex gap-10 items-center">

                                        <img className="h-8 w-8 object-cover rounded-lg" src={contrat.image} alt="" />

                                        <p>{contrat.nom}</p>

                                    </div>

                                    <p className="font-bold">{contrat.prix} €</p>
                                </div>

                                <div className={`dropdown flex items-center justify-center gap-5 transition-all duration-500 ease-in-out overflow-hidden ${openContratId === contrat.id ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0'}`}>

                                    <svg onClick={(e) => handleDown(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-minus-icon lucide-minus
                                    
                                    hover:scale-140
                                    cursor-pointer
                                    hover:text-black/100
                                    "><path d="M5 12h14" /></svg>

                                    <p className="text-xs">{""}
                                        {contrat.echeance} Echéances</p>

                                    <svg onClick={(e) => handleUp(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus
                                        
                                        hover:scale-140
                                    cursor-pointer
                                    hover:text-black/100"><path d="M5 12h14" /><path d="M12 5v14" /></svg>


                                </div>

                            </div>
                            <div className="group" onClick={() => supprimerContrat(contrat.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke=" #B91C1C" class="cursor-pointer size-8 ml-5 transition-all groupe-hover group-hover:stroke-red-800 group-hover:scale-110 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </li>
                    )
                })}

                <h3 className="font-bold uppercase text-large text-left ml-3 mt-5">Liste Paiement x10</h3>

                {mesContrats.filter(contrat => {
                    const abos = contrat.type === "Paiement x10";

                    return abos;
                }).map(contrat => {
                    return (


                        <li onClick={() => toggleDrop(contrat.id)} className="flex items-center justify-center mt-2" >
                            <div className="group">
                            </div>


                            <div className="flex flex-col shadow-inner w-[60%] min-w-[270px] justify-between p-3 pr-5 pl-5 rounded-lg items-center " key={contrat.id}>
                                <div className="flex   w-[100%] min-w-[270px] justify-between p-3 pr-5 pl-5 rounded-lg items-center ">

                                    <div className="flex gap-10 items-center">

                                        <img className="h-8 w-8 object-cover rounded-lg" src={contrat.image} alt="" />

                                        <p>{contrat.nom}</p>

                                    </div>

                                    <p className="font-bold">{contrat.prix} €</p>
                                </div>

                                <div className={`dropdown flex items-center justify-center gap-5 transition-all duration-500 ease-in-out overflow-hidden ${openContratId === contrat.id ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0'}`}>

                                    <svg onClick={(e) => handleDown(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-minus-icon lucide-minus
                                    
                                    hover:scale-140
                                    cursor-pointer
                                    hover:text-black/100
                                    "><path d="M5 12h14" /></svg>

                                    <p className="text-xs"> {""}
                                        {contrat.echeance} Echéances</p>

                                    <svg onClick={(e) => handleUp(contrat.id, e)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus
                                        
                                        hover:scale-140
                                    cursor-pointer
                                    hover:text-black/100"><path d="M5 12h14" /><path d="M12 5v14" /></svg>


                                </div>

                            </div>
                            <div className="group" onClick={() => supprimerContrat(contrat.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke=" #B91C1C" class="cursor-pointer size-8 ml-5 transition-all groupe-hover group-hover:stroke-red-800 group-hover:scale-110 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </li>
                    )
                })}

                <div class="container-total absolute w-[100%] min-w-[400px] bottom-23 text-center">
                    <p className="text-xl">Total :</p>
                    <p className="text-2xl font-bold">{total ? total : 0} €</p>
                </div>

            </div>
            {scrollDown && 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down
            absolute right-2
            animate-bounce
            "><path d="m6 9 6 6 6-6"/></svg>
            }
        </div>
    )
}

export default Contrat