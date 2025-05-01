import React, {useState, useEffect} from "react";
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Prelevement from "../pages/Prelevement";
import Contrat from "../pages/Contrat";
import Accueil from "../pages/Accueil";
import AjouterContrat from "../pages/AjouterContrat";
import Header from "./header";
import { AnimatePresence, motion } from "framer-motion";
import Version from "./Version";
import EtapeOne from "../pages/EtapeOne";
import EtapeTwo from "../pages/EtapeTwo";

function AnimatedRoutes() {


    
    const location = useLocation();

    const [mesContrats, setMesContrats] = useState([])

    useEffect(() => {
        const dataLocal = localStorage.getItem("mesContrats");
        if (dataLocal) {
            setMesContrats(JSON.parse(dataLocal))
        }
    }, [])

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


                    <Route path="/prélèvements" element={<Prelevement />} />

                    <Route path="/contrats" element={<Contrat />} />

                    <Route path="/ajouter-contrat" element={<AjouterContrat />} />
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