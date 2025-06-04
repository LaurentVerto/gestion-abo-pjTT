import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Prelevement from "../pages/Prelevement";
import Contrat from "../pages/Contrat";
import Accueil from "../pages/Accueil";
import AjouterContrat from "../pages/AjouterContrat";
import Header from "./Header";
import { AnimatePresence, motion } from "framer-motion";
import Version from "./Version";
import EtapeOne from "../pages/EtapeOne";
import EtapeTwo from "../pages/EtapeTwo";
import EtapeThree from "../pages/EtapeThree";
import useContratServices from "../services/ContratsServices";
import Saving from "../pages/Saving";
import SavingDetails from "../pages/SavingDetails";

function AnimatedRoutes() {

    const navigate = useNavigate();
    const { myContracts } = useContratServices();
    
    const [isLoading, setIsLoading] = useState(true); // Gérer le temps de chargement des contrats
    const [hasRedirected, setHasRedirected] = useState(false); // Marque si la redirection a été effectuée

    useEffect(() => {
        // Si myContracts est encore vide ou en attente, on reste en mode "loading"
        if (myContracts === undefined) {
            return; // Ne rien faire tant que les contrats ne sont pas définis
        }

        // Dès que les contrats sont prêts, gérer la redirection
        if (myContracts.length === 0 && !hasRedirected && !isLoading) {
            navigate("/"); // Rediriger vers l'accueil si pas de contrats
            setHasRedirected(true); // Marque que la redirection a eu lieu
        } else if (myContracts.length > 0 && !hasRedirected && !isLoading) {
            navigate("/prelevements"); // Rediriger vers /prelevements si des contrats existent
            setHasRedirected(true); // Marque que la redirection a eu lieu
        }
    }, [myContracts, navigate, hasRedirected, isLoading]); // Dépendances : wait until myContracts are available

    useEffect(() => {
        // S'assurer que les contrats sont bien chargés avant d'effectuer des actions supplémentaires
        if (myContracts !== undefined) {
            setIsLoading(false); // Une fois les contrats chargés, on passe à "isLoading = false"
        }
    }, [myContracts]);

    useEffect(() => {
    }, [myContracts]);

    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -0 }}
                transition={{ duration: 0.3 }}
                className="min-h-screen flex flex-col overflow-hidden"  // Empêche la barre de défilement temporaire
            >
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/etapeOne" element={<EtapeOne />} />
                    <Route path="/etapeTwo" element={<EtapeTwo />} />
                    <Route path="/etapeThree" element={<EtapeThree />} />

                    <Route path="/prelevements" element={<Prelevement />} />

                    <Route path="/contrats" element={<Contrat />} />

                    <Route path="/ajouter-contrat" element={<AjouterContrat />} />
                    
                    <Route path="/epargnes" element={<Saving />} />
                    <Route path="/epargnes/:id" element={<SavingDetails />} />
                </Routes>
            </motion.div>
        </AnimatePresence>
    );
}

function Navigation() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <AnimatedRoutes />
                <Version />
            </div>
        </Router>
    );
}

export default Navigation;