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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ContratsServices_1 = __importDefault(require("../services/ContratsServices"));
const ListeContratsInf15_1 = __importDefault(require("../components/contratsFilter/ListeContratsInf15"));
const ListeContratsSup15_1 = __importDefault(require("../components/contratsFilter/ListeContratsSup15"));
function Prelevement() {
    // Recuperation de mesContrat en local storage
    const { myContracts, setMyContracts } = (0, ContratsServices_1.default)();
    const contentRef = (0, react_1.useRef)(null);
    const [scrollUp, setScrollUp] = (0, react_1.useState)(false);
    const [scrollDown, setScrollDown] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
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
                setScrollUp(content.scrollTop > 0); // Si on a scrollé vers le haut
                setScrollDown(content.scrollHeight - content.scrollTop > content.clientHeight); // Si on peut encore scroller vers le bas
            };
            content.addEventListener('scroll', handleScroll);
            // Nettoyage de l'événement lors du démontage du composant
            return () => content.removeEventListener('scroll', handleScroll);
        }
    }, []); // Dépendances vides => s'exécute une seule fois après le premier rendu
    (0, react_1.useEffect)(() => {
        const timeout = setTimeout(() => {
            const content = contentRef.current;
            if (content) {
                // Vérifie de nouveau si le contenu est plus grand que l'espace visible
                const isScrollable = content.scrollHeight > content.clientHeight;
                setScrollDown(isScrollable);
            }
        }, 50); // Timeout à 0 pour qu'il se produise après le premier rendu complet
        return () => clearTimeout(timeout);
    }, []); // Ajout d'un effet supplémentaire pour forcer la mise à jour après le premier rendu
    return (react_1.default.createElement("div", { className: "main-content" },
        react_1.default.createElement("h2", { className: 'font-bold uppercase text-2xl text-center mt-5' }, "Liste prelevements"),
        scrollUp &&
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-chevron-down-icon lucide-chevron-down\r\n            absolute right-2 top-5\r\n            animate-bounce rotate-180 z-11\r\n            " },
                react_1.default.createElement("path", { d: "m6 9 6 6 6-6" })),
        react_1.default.createElement("div", { ref: contentRef, className: "overflow-y-scroll h-[calc(100vh-220px)]" },
            myContracts.length === 0 && react_1.default.createElement("p", { className: "text-center mt-5" }, "Aucun contrat enregistr\u00E9"),
            react_1.default.createElement(ListeContratsInf15_1.default, null),
            react_1.default.createElement(ListeContratsSup15_1.default, null)),
        scrollDown &&
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-chevron-down-icon lucide-chevron-down\r\n            absolute right-2 bottom-13 z-11\r\n            animate-bounce\r\n            " },
                react_1.default.createElement("path", { d: "m6 9 6 6 6-6" }))));
}
exports.default = Prelevement;
