"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useModeDePaiement() {
    const [listeModeDePaiement, setListeModeDePaiement] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('data.json');
                const data = await response.json();
                setListeModeDePaiement(data.types);
            }
            catch (error) {
                console.error("Erreur survenu lors de la récuperation de la liste : ", error);
            }
        };
        fetchData();
    }, []);
    return {
        listeModeDePaiement,
        setListeModeDePaiement,
    };
}
exports.default = useModeDePaiement;
