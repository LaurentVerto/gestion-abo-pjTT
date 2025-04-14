import React, { useEffect, useRef, useState } from "react";

import ListeContratsAbonnements from "../components/contratsFilter/ListeContratsAbonnements";
import ListeContratsX3 from "../components/contratsFilter/ListeContratsX3";
import ListeContratsX4 from "../components/contratsFilter/ListeContratsX4";
import ListeContratsX10 from "../components/contratsFilter/ListeContratsX10";
import useContratServices from "../services/ContratsServices";

function Contrat() {

    const {total} = useContratServices();

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

            <ListeContratsAbonnements />
            <ListeContratsX3 />
            <ListeContratsX4 />
            <ListeContratsX10 />

                
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