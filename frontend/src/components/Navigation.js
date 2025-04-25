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
const react_router_dom_1 = require("react-router-dom");
const Prelevement_1 = __importDefault(require("../pages/Prelevement"));
const Contrat_1 = __importDefault(require("../pages/Contrat"));
const AjouterContrat_1 = __importDefault(require("../pages/AjouterContrat"));
const header_1 = __importDefault(require("./header"));
const framer_motion_1 = require("framer-motion");
const Version_1 = __importDefault(require("./Version"));
function AnimatedRoutes() {
    const location = (0, react_router_dom_1.useLocation)();
    const [mesContrats, setMesContrats] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const dataLocal = localStorage.getItem("mesContrats");
        if (dataLocal) {
            setMesContrats(JSON.parse(dataLocal));
        }
    }, []);
    return (react_1.default.createElement(framer_motion_1.AnimatePresence, { mode: "wait" },
        react_1.default.createElement(framer_motion_1.motion.div, { key: location.pathname, initial: { opacity: 0, y: 0 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -0 }, transition: { duration: 0.3 }, className: "min-h-screen flex flex-col overflow-hidden" // Empêche la barre de défilement temporaire
         },
            react_1.default.createElement(react_router_dom_1.Routes, { location: location, key: location.pathname },
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Prelevement_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/contrats", element: react_1.default.createElement(Contrat_1.default, null) }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/ajouter-contrat", element: react_1.default.createElement(AjouterContrat_1.default, null) })))));
}
function Navigation() {
    return (react_1.default.createElement(react_router_dom_1.HashRouter, null,
        react_1.default.createElement("div", { className: "min-h-screen flex flex-col" },
            react_1.default.createElement(header_1.default, null),
            react_1.default.createElement(AnimatedRoutes, null),
            react_1.default.createElement(Version_1.default, null))));
}
exports.default = Navigation;
