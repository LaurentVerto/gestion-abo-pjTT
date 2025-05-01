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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Header() {
    const location = (0, react_router_dom_1.useLocation)();
    const [activeTab, setActiveTab] = (0, react_1.useState)(location.pathname); // ici on recupere l'url avec le pathname pour que le menu reste actif
    (0, react_1.useEffect)(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("header", { className: "flex justify-center fixed bottom-3 w-[100%]" },
            react_1.default.createElement("nav", { className: "w-[40%] min-w-[350px]" },
                react_1.default.createElement("ul", { className: "flex justify-between w-[100%] p-3 pl-5 pr-5" },
                    react_1.default.createElement(NavItem, { to: "/", activeTab: activeTab, setActiveTab: setActiveTab, label: "Accueil" },
                        react_1.default.createElement("path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" })),
                    react_1.default.createElement(NavItem, { to: "/prelevements", activeTab: activeTab, setActiveTab: setActiveTab, label: "Prelevements" },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" })),
                    react_1.default.createElement(NavItem, { to: "/contrats", activeTab: activeTab, setActiveTab: setActiveTab, label: "Contrats" },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" })),
                    react_1.default.createElement(NavItem, { to: "/ajouter-contrat", activeTab: activeTab, setActiveTab: setActiveTab, label: "Ajouter" },
                        react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 4.5v15m7.5-7.5h-15" })))))));
}
// Composant réutilisable pour chaque bouton de navigation
function NavItem({ to, activeTab, setActiveTab, label, children }) {
    const isActive = activeTab === to;
    return (react_1.default.createElement("li", { className: "relative group top-0", onClick: () => setActiveTab(to) },
        react_1.default.createElement(react_router_dom_1.Link, { to: to, className: "flex flex-col items-center" },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "gray", className: `size-9 transition-all duration-300 
                    ${isActive ? "stroke-[#f8f8f8] translate-y-[-8px]" : "group-hover:stroke-[#f8f8f8] group-hover:translate-y-[-8px]"}` }, children),
            react_1.default.createElement("span", { className: `absolute top-7 text-[#f8f8f8] text-sm font-medium transition-all duration-300 
                ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}` }, label))));
}
exports.default = Header;
