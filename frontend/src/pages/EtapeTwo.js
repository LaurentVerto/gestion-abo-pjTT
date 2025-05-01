"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ICON_SP = "/logo-xs.png";
const etapeTwo = "/etapeTwo.png";
function EtapeTwo() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: " main-content container bg-[#1d1d21] w-[100vw] h-[100vh] z-25 fontAbe pb-0  overflow-y-scroll" },
            react_1.default.createElement("div", { className: "flex justify-center  " },
                react_1.default.createElement("img", { src: ICON_SP, alt: "logo-xs", className: "h-20 left-2 top-2 fixed" }),
                react_1.default.createElement("div", { className: "mt-5 self-center" },
                    react_1.default.createElement("p", { className: "text-[#f8f8f8]  " }, "Bienvenue sur"),
                    react_1.default.createElement("h1", { className: "text-black text-xl linear-title font-bold text-center" }, "SplitPay"))),
            react_1.default.createElement("div", { className: "point-design flex justify-center gap-15 mt-10" },
                react_1.default.createElement("div", { className: "bg-[#f8f8f8] w-2.5 h-2.5 rounded-full shadow-md" }),
                react_1.default.createElement("div", { className: "bg-[#60A8FE] w-2.5 h-2.5 rounded-full shadow-md" }),
                react_1.default.createElement("div", { className: "bg-[#f8f8f8] w-2.5 h-2.5 rounded-full shadow-md" })),
            react_1.default.createElement("div", { className: "p-10 text-xs " },
                react_1.default.createElement("p", { className: "fontAbe font-bold" }, "Une fois le contrat enregistr\u00E9 :"),
                react_1.default.createElement("ul", { className: "list-disc ml-10 " },
                    react_1.default.createElement("li", { className: "mt-2" }, "Rendez-vous dans la section Onglets pour retrouver tous vos contrats."),
                    react_1.default.createElement("li", { className: "mt-2" }, "Vous pouvez supprimer un contrat \u00E0 tout moment si n\u00E9cessaire."),
                    react_1.default.createElement("li", { className: "mt-2" },
                        "Pour les abonnements, vous avez le choix entre :",
                        react_1.default.createElement("ul", { className: "ml-10 list-disc" },
                            react_1.default.createElement("li", { className: "mt-2" }, "  supprimer d\u00E9finitivement le contrat"),
                            react_1.default.createElement("li", { className: "mt-2" }, "le d\u00E9sactiver temporairement pour une p\u00E9riode donn\u00E9e.")))),
                react_1.default.createElement("img", { src: etapeTwo, alt: "image etape", className: "mt-10 ml-10 mb-10" }),
                react_1.default.createElement("div", { className: "flex justify-center gap-10 mb-10" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/EtapeOne", className: "bg-gray-700 p-2 rounded-lg " }, "Etape Pr\u00E9c\u00E9dente"),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/EtapeThree", className: "bg-gray-500 p-2 rounded-lg animate-pulse " }, "Etape Suivante")),
                react_1.default.createElement("div", { className: "flex justify-center mb-20" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/prelevements", className: "bg-[#60A8FE] p-2 rounded-lg text-black " }, "Entrer dans le site"))))));
}
exports.default = EtapeTwo;
