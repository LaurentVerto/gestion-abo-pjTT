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
        react_1.default.createElement("div", { className: "main-content container bg-[#1d1d21] w-screen h-screen fontAbe pb-0 overflow-y-scroll relative " },
            react_1.default.createElement("div", { className: "absolute h-30 bg-[#f8f8f8] w-[100vw] z-0" }),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "absolute top-23 left-0 w-full z-2" },
                react_1.default.createElement("path", { fill: "#f8f8f8", fillOpacity: "1", d: "M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z" })),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "absolute top-26 left-0 w-full z-1" },
                react_1.default.createElement("defs", null,
                    react_1.default.createElement("linearGradient", { id: "monDegrade", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                        react_1.default.createElement("stop", { offset: "0%", stopColor: "#60A8FE" }),
                        react_1.default.createElement("stop", { offset: "100%", stopColor: "#4950FF" }))),
                react_1.default.createElement("path", { fill: "url(#monDegrade)", fillOpacity: "1", d: "M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z" })),
            react_1.default.createElement("div", { className: "relative z-10 flex justify-center" },
                react_1.default.createElement("img", { src: ICON_SP, alt: "logo-xs", className: "h-20 left-2 top-10 fixed" }),
                react_1.default.createElement("div", { className: "mt-5 self-center" },
                    react_1.default.createElement("p", { className: "text-[#f8f8f8] text-black" }, "Bienvenue sur"),
                    react_1.default.createElement("h1", { className: "text-black text-xl linear-title font-bold text-center" }, "SplitPay"))),
            react_1.default.createElement("div", { className: "point-design flex justify-center gap-4 mt-10 relative z-10" },
                react_1.default.createElement("div", { className: "bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md" }),
                react_1.default.createElement("div", { className: "bg-[#60A8FE] w-2.5 h-2.5 rounded-full shadow-md" }),
                react_1.default.createElement("div", { className: "bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md" })),
            react_1.default.createElement("div", { className: "p-10 text-xs relative z-10 mt-5 " },
                react_1.default.createElement("p", { className: "fontAbe font-bold" }, "Une fois le contrat enregistr\u00E9 :"),
                react_1.default.createElement("ul", { className: "list-disc ml-10 " },
                    react_1.default.createElement("li", { className: "mt-2" }, "Rendez-vous dans la section Onglets pour retrouver tous vos contrats."),
                    react_1.default.createElement("li", { className: "mt-2" }, "Vous pouvez supprimer un contrat \u00E0 tout moment si n\u00E9cessaire."),
                    react_1.default.createElement("li", { className: "mt-2" },
                        "Pour les abonnements, vous avez le choix entre :",
                        react_1.default.createElement("ul", { className: "ml-10 list-disc" },
                            react_1.default.createElement("li", { className: "mt-2" }, "  supprimer d\u00E9finitivement le contrat"),
                            react_1.default.createElement("li", { className: "mt-2" }, "le d\u00E9sactiver temporairement pour une p\u00E9riode donn\u00E9e.")))),
                react_1.default.createElement("img", { src: etapeTwo, alt: "image etape", className: "mt-10 ml-10 mb-28" }),
                react_1.default.createElement("div", { className: "flex justify-center gap-10 mb-5" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/EtapeOne", className: "bg-gray-700 p-2 rounded-lg " }, "Etape Pr\u00E9c\u00E9dente"),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/EtapeThree", className: "bg-gray-500 p-2 rounded-lg animate-pulse " }, "Etape Suivante")),
                react_1.default.createElement("div", { className: "flex justify-center mb-20" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/prelevements", className: "bg-[#60A8FE] p-2 rounded-lg text-black " }, "Entrer dans le site"))),
            react_1.default.createElement("div", { className: "absolute h-33 -bottom-80 bg-[#f8f8f8] w-[100vw] z-0" }),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "absolute rotate-180 -bottom-50 left-0 w-full z-2" },
                react_1.default.createElement("path", { fill: "#f8f8f8", fillOpacity: "1", d: "M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z" })),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "absolute rotate-180 -bottom-47 left-0 w-full z-1" },
                react_1.default.createElement("defs", null,
                    react_1.default.createElement("linearGradient", { id: "monDegrade", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                        react_1.default.createElement("stop", { offset: "0%", stopColor: "#60A8FE" }),
                        react_1.default.createElement("stop", { offset: "100%", stopColor: "#4950FF" }))),
                react_1.default.createElement("path", { fill: "url(#monDegrade)", fillOpacity: "1", d: "M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z" })))));
}
exports.default = EtapeTwo;
