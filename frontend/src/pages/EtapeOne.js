"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ICON_SP = "/logo-xs.png";
const etapeOne = "/etapeOne.png";
function EtapeOne() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: " main-content container bg-[#1d1d21] w-[100vw] h-[100vh] z-25 fontAbe pb-0  overflow-y-scroll" },
            react_1.default.createElement("div", { className: "flex justify-center  " },
                react_1.default.createElement("img", { src: ICON_SP, alt: "logo-xs", className: "h-20 left-2 top-2 fixed" }),
                react_1.default.createElement("div", { className: "mt-5 self-center" },
                    react_1.default.createElement("p", { className: "text-[#f8f8f8]  " }, "Bienvenue sur"),
                    react_1.default.createElement("h1", { className: "text-black text-xl linear-title font-bold text-center" }, "SplitPay"))),
            react_1.default.createElement("div", { className: "point-design flex justify-center gap-15 mt-10" },
                react_1.default.createElement("div", { className: "bg-[#60A8FE] w-2.5 h-2.5 rounded-full shadow-md" }),
                react_1.default.createElement("div", { className: "bg-[#f8f8f8] w-2.5 h-2.5 rounded-full shadow-md" }),
                react_1.default.createElement("div", { className: "bg-[#f8f8f8] w-2.5 h-2.5 rounded-full shadow-md" })),
            react_1.default.createElement("div", { className: "p-10 text-xs " },
                react_1.default.createElement("p", { className: "fontAbe font-bold" }, "Pour bien enregistrer un contrat, vous devez renseigner les informations suivantes :"),
                react_1.default.createElement("ul", { className: "list-disc ml-10 " },
                    react_1.default.createElement("li", { className: "mt-2" }, "Le nom du contrat (exemple : Netflix, Assurance Auto, etc.)"),
                    react_1.default.createElement("li", { className: "mt-2" }, "La date de pr\u00E9l\u00E8vement (le jour o\u00F9 le montant est d\u00E9bit\u00E9, par exemple le 5 du mois)"),
                    react_1.default.createElement("li", { className: "mt-2" }, "Le montant pr\u00E9lev\u00E9 (exemple : 29,99 \u20AC)"),
                    react_1.default.createElement("li", { className: "mt-2" },
                        "Le type de contrat :",
                        react_1.default.createElement("ul", { className: "ml-10 list-disc" },
                            react_1.default.createElement("li", { className: "mt-2" }, " Abonnement (paiement r\u00E9gulier tous les mois, etc.)"),
                            react_1.default.createElement("li", { className: "mt-2" }, "Paiement en plusieurs fois (un montant total divis\u00E9 sur plusieurs \u00E9ch\u00E9ances)")))),
                react_1.default.createElement("img", { src: etapeOne, alt: "image etape", className: "mt-10 ml-10 mb-10" }),
                react_1.default.createElement("div", { className: "flex justify-center mb-10" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/EtapeTwo", className: "bg-gray-500 p-2 rounded-lg animate-pulse " }, "Etape Suivante")),
                react_1.default.createElement("div", { className: "flex justify-center mb-10" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/EtapeTwo", className: "bg-[#60A8FE] p-2 rounded-lg text-black " }, "Entrer dans le site")),
                react_1.default.createElement("div", { className: "flex justify-center mb-20" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/prelevements", className: "bg-[#60A8FE] p-2 rounded-lg text-black " }, "Entrer dans le site"))))));
}
exports.default = EtapeOne;
