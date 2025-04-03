import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Prelevement from "./Prelevement";
import Contrat from "./Contrat";
import AjouterContrat from "./AjouterContrat";
import Header from "./header";
import { AnimatePresence, motion } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="min-h-screen flex flex-col overflow-hidden"  // Empêche la barre de défilement temporaire
            >
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Prelevement />} />
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
            </div>
        </Router>
    );
}

export default Navigation;