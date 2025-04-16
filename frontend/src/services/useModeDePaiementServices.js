import { useEffect, useState } from "react";

function useModeDePaiement() {

const [listeModeDePaiement, setListeModeDePaiement] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('data.json');

                const data = await response.json();
                setListeModeDePaiement(data.types);


            } catch (error) {
                console.error("Erreur survenu lors de la récuperation de la liste : ", error)
            }

        }
        fetchData();
    }, []);

    return {
        listeModeDePaiement,
        setListeModeDePaiement,
    }

}

export default useModeDePaiement;