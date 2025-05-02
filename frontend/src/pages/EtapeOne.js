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
    return (react_1.default.createElement("div", { className: "main-content  bg-[#1d1d21] w-full h-screen fontAbe pb-0 overflow-y-scroll relative " },
        react_1.default.createElement("div", { className: "absolute h-[15dvh] bg-[#f8f8f8] w-full z-0 top-[0dvh] md:top-[0dvh] md:h-[5dvh] " }),
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "absolute top-[13dvh] md:top-[0dvh] left-0 w-full z-2" },
            react_1.default.createElement("path", { fill: "#f8f8f8", fillOpacity: "1", d: "M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z" })),
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "absolute top-[15dvh] md:top-[2dvh] left-0 w-full z-1" },
            react_1.default.createElement("defs", null,
                react_1.default.createElement("linearGradient", { id: "monDegrade", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                    react_1.default.createElement("stop", { offset: "0%", stopColor: "#60A8FE" }),
                    react_1.default.createElement("stop", { offset: "100%", stopColor: "#4950FF" }))),
            react_1.default.createElement("path", { fill: "url(#monDegrade)", fillOpacity: "1", d: "M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z" })),
        react_1.default.createElement("div", { className: "relative z-10 flex justify-center " },
            react_1.default.createElement("img", { src: ICON_SP, alt: "logo-xs", className: "h-20 left-2 top-10 fixed" }),
            react_1.default.createElement("div", { className: "mt-5 self-center" },
                react_1.default.createElement("p", { className: "text-[#f8f8f8] text-black" }, "Bienvenue sur"),
                react_1.default.createElement("h1", { className: "text-black text-xl linear-title font-bold text-center" }, "SplitPay"))),
        react_1.default.createElement("div", { className: "point-design flex justify-center gap-4 mt-[4dvh] relative z-10" },
            react_1.default.createElement("div", { className: "bg-[#60A8FE] w-2.5 h-2.5 rounded-full shadow-md" }),
            react_1.default.createElement("div", { className: "bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md" }),
            react_1.default.createElement("div", { className: "bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md" })),
        react_1.default.createElement("div", { className: "p-10 text-xs relative flex flex-col items-center z-10 mt-[5dvh] md:mt-[15dvh]" },
            react_1.default.createElement("p", { className: "font-bold " }, "Pour bien enregistrer un contrat, vous devez renseigner les informations suivantes :"),
            react_1.default.createElement("ul", { className: "list-disc ml-10 mt-2 space-y-2" },
                react_1.default.createElement("li", null, "Le nom du contrat (exemple : Netflix, Assurance Auto, etc.)"),
                react_1.default.createElement("li", null, "La date de pr\u00E9l\u00E8vement (le jour o\u00F9 le montant est d\u00E9bit\u00E9, par exemple le 5 du mois)"),
                react_1.default.createElement("li", null, "Le montant pr\u00E9lev\u00E9 (exemple : 29,99 \u20AC)"),
                react_1.default.createElement("li", null,
                    "Le type de contrat :",
                    react_1.default.createElement("ul", { className: "ml-10 list-disc mt-2 space-y-2" },
                        react_1.default.createElement("li", null, "Abonnement (paiement r\u00E9gulier tous les mois, etc.)"),
                        react_1.default.createElement("li", null, "Paiement en plusieurs fois (un montant total divis\u00E9 sur plusieurs \u00E9ch\u00E9ances)")))),
            react_1.default.createElement("img", { src: etapeOne, alt: "image etape", className: "mt-10 ml-10 mb-20" }),
            react_1.default.createElement("div", { className: "flex justify-center mb-5" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/EtapeTwo", className: "bg-gray-500 p-2 rounded-lg animate-pulse text-white" }, "\u00C9tape Suivante")),
            react_1.default.createElement("div", { className: "flex justify-center mb-20" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/prelevements", className: "bg-[#60A8FE] p-2 rounded-lg text-black" }, "Entrer dans le site"))),
        react_1.default.createElement("div", { className: "absolute h-40 -bottom-[60dvh] md:hidden  bg-[#f8f8f8] w-[100vw] z-0 " }),
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "absolute rotate-180 -bottom-[36dvh] md:hidden  left-0 w-full z-2" },
            react_1.default.createElement("path", { fill: "#f8f8f8", fillOpacity: "1", d: "M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z" })),
        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "absolute rotate-180 -bottom-[34dvh] md:hidden  left-0 w-full z-1" },
            react_1.default.createElement("defs", null,
                react_1.default.createElement("linearGradient", { id: "monDegrade", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                    react_1.default.createElement("stop", { offset: "0%", stopColor: "#60A8FE" }),
                    react_1.default.createElement("stop", { offset: "100%", stopColor: "#4950FF" }))),
            react_1.default.createElement("path", { fill: "url(#monDegrade)", fillOpacity: "1", d: "M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z" }))));
}
exports.default = EtapeOne;
