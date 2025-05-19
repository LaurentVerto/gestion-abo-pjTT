"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Prelevement_1 = __importDefault(require("../pages/Prelevement"));
const Contrat_1 = __importDefault(require("../pages/Contrat"));
const Accueil_1 = __importDefault(require("../pages/Accueil"));
const AjouterContrat_1 = __importDefault(require("../pages/AjouterContrat"));
const Header_1 = __importDefault(require("./Header"));
const framer_motion_1 = require("framer-motion");
const Version_1 = __importDefault(require("./Version"));
const EtapeOne_1 = __importDefault(require("../pages/EtapeOne"));
const EtapeTwo_1 = __importDefault(require("../pages/EtapeTwo"));
const EtapeThree_1 = __importDefault(require("../pages/EtapeThree"));
const ContratsServices_1 = __importDefault(require("../services/ContratsServices"));
function AnimatedRoutes() {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { myContracts } = (0, ContratsServices_1.default)();
    const [isLoading, setIsLoading] = (0, react_1.useState)(true); // Gérer le temps de chargement des contrats
    const [hasRedirected, setHasRedirected] = (0, react_1.useState)(false); // Marque si la redirection a été effectuée
    (0, react_1.useEffect)(() => {
        // Si myContracts est encore vide ou en attente, on reste en mode "loading"
        if (myContracts === undefined) {
            return; // Ne rien faire tant que les contrats ne sont pas définis
        }
        // Dès que les contrats sont prêts, gérer la redirection
        if (myContracts.length === 0 && !hasRedirected && !isLoading) {
            navigate("/"); // Rediriger vers l'accueil si pas de contrats
            setHasRedirected(true); // Marque que la redirection a eu lieu
        }
        else if (myContracts.length > 0 && !hasRedirected && !isLoading) {
            navigate("/prelevements"); // Rediriger vers /prelevements si des contrats existent
            setHasRedirected(true); // Marque que la redirection a eu lieu
        }
    }, [myContracts, navigate, hasRedirected, isLoading]); // Dépendances : wait until myContracts are available
    (0, react_1.useEffect)(() => {
        // S'assurer que les contrats sont bien chargés avant d'effectuer des actions supplémentaires
        if (myContracts !== undefined) {
            setIsLoading(false); // Une fois les contrats chargés, on passe à "isLoading = false"
        }
    }, [myContracts]);
    (0, react_1.useEffect)(() => {
        console.log(myContracts); // Vérifie le contenu de myContracts
    }, [myContracts]);
    const location = (0, react_router_dom_1.useLocation)();
    return (react_1.default.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
        react_1.default.createElement(framer_motion_1.motion.div, { key: location.pathname, initial: { opacity: 0, y: 0 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -0 }, transition: { duration: 0.3 }, className: "min-h-screen flex flex-col overflow-hidden" // Empêche la barre de défilement temporaire
         },
            react_1.default.createElement(react_router_dom_1.Routes, { location: location, key: location.pathname },
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Accueil_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/etapeOne", element: react_1.default.createElement(EtapeOne_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/etapeTwo", element: react_1.default.createElement(EtapeTwo_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/etapeThree", element: react_1.default.createElement(EtapeThree_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/prelevements", element: react_1.default.createElement(Prelevement_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/contrats", element: react_1.default.createElement(Contrat_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/ajouter-contrat", element: react_1.default.createElement(AjouterContrat_1.default, null) })))));
}
function Navigation() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", { className: "min-h-screen flex flex-col" },
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(AnimatedRoutes, null),
            react_1.default.createElement(Version_1.default, null))));
}
exports.default = Navigation;
