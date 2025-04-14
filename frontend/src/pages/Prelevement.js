import React, { useEffect, useRef, useState } from "react";
import useContratServices from "../services/ContratsServices";
import ListeContratsInf15 from "../components/contratsFilter/ListeContratsInf15"
import ListeContratsSup15 from "../components/contratsFilter/ListeContratsSup15";

function Prelevement() {

    const {mesContrats, setMesContrats} = useContratServices ();

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
    }, []);// Ajout d'un effet supplémentaire pour forcer la mise à jour après le premier rendu

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

                <ListeContratsInf15 />
                <ListeContratsSup15 />
                
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