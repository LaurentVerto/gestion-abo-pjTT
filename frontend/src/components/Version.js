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
const ICON_SP = "/logo-xs.png";
//permet de récuperer le CHEMIN en string
//yagni
function Version() {
    const [overlay, setOverlay] = (0, react_1.useState)(false);
    const handleVersionOverlay = () => {
        setOverlay(!overlay);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("img", { src: ICON_SP, alt: "logo_back", className: " centerP absolute z-1 opacity-3 pointer-events-none" }),
        react_1.default.createElement("p", { className: "absolute text-[9px] top-2 left-2 z-15" },
            "By ",
            react_1.default.createElement("br", null),
            " LFPC-DEV"),
        overlay &&
            react_1.default.createElement("div", { onClick: handleVersionOverlay, className: "overlay  w-[100%] h-[100%] bg-black/70 absolute z-10 " },
                react_1.default.createElement("div", { className: "w-[70%] h-auto absolute centerP rounded-lg bg-[#282830] drop-figma p-3" },
                    react_1.default.createElement("span", { className: "absolute right-2 top-[-2px] font-sans cursor-pointer" }, "x"),
                    react_1.default.createElement("h3", null,
                        "Note de version : ",
                        react_1.default.createElement("span", { className: "font-sans lowercase" }, "v"),
                        "0.1"),
                    react_1.default.createElement("ul", { className: "font-sans text-sm list-disc ml-2 mt-3  flex flex-col gap-3" },
                        react_1.default.createElement("li", { className: "list-none font-thin " },
                            "Onglet Pr\u00E9l\u00E8vement",
                            react_1.default.createElement("ul", { className: "ml-5 mt-1 font-light text-[12px] " },
                                react_1.default.createElement("li", { className: "list-disc" }, "Ajout du total de pr\u00E9l\u00E8vement le 15 et le 30 du mois"),
                                react_1.default.createElement("li", { className: "list-disc" }, "Liste des contrats"))),
                        react_1.default.createElement("li", { className: "list-none font-thin " },
                            " Onglet Contrats",
                            react_1.default.createElement("ul", { className: "ml-5 mt-1 font-light text-[12px] " },
                                react_1.default.createElement("li", { className: "list-disc" }, "Activer / D\u00E9sactiver Abonnement"),
                                react_1.default.createElement("li", { className: "list-disc" }, "Supprimer un contrat"),
                                react_1.default.createElement("li", { className: "list-disc" }, "Ajouter / Retirer \u00E9ch\u00E9ances"))),
                        react_1.default.createElement("li", { className: "list-none font-thin " },
                            " Onglet Ajouter",
                            react_1.default.createElement("ul", { className: "ml-5 mt-1 font-light text-[12px] " },
                                react_1.default.createElement("li", { className: "list-disc" }, "Ajout de contrat"),
                                react_1.default.createElement("li", { className: "list-disc" }, "Ajout de preset nom de contrat (Netflix, Canal +, Spotify, Deezer, YouTube Music )")))),
                    react_1.default.createElement("p", { className: "text-xs m-4 text-center" }, "\u26A0\uFE0F Le navigateur ne doit pas \u00EAtre en priv\u00E9 pour la sauvegarde de vos contrats"),
                    react_1.default.createElement("p", { className: "mt-5 text-center text-xs text-white/20 cursor-pointer" }, "Tap pour fermer"))),
        react_1.default.createElement("p", { onClick: handleVersionOverlay, className: "absolute border cursor-pointer rounded-full right-2 top-2 w-7 h-7 flex justify-center items-center text-base drop-figma z-20" }, "?")));
}
exports.default = Version;
