"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ICON_SP = "/logo-xs.png";
const etapeThree = "/etapeThree.png";
function EtapeThree() {
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
                react_1.default.createElement("div", { className: "bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md" }),
                react_1.default.createElement("div", { className: "bg-[#60A8FE] w-2.5 h-2.5 rounded-full shadow-md" })),
            react_1.default.createElement("div", { className: "p-10 text-xs relative z-10 mt-5 " },
                react_1.default.createElement("p", { className: "fontAbe font-bold" }, "Ensuite, vous retrouvez votre liste de pr\u00E9l\u00E8vements, avec pour chaque contrat :"),
                react_1.default.createElement("ul", { className: "list-disc ml-10 " },
                    react_1.default.createElement("li", { className: "mt-2" }, "La date de pr\u00E9l\u00E8vement"),
                    react_1.default.createElement("li", { className: "mt-2" }, "Le montant associ\u00E9"),
                    react_1.default.createElement("li", { className: "mt-2" }, "Un montant total est \u00E9galement affich\u00E9, avec une s\u00E9paration entre les deux quinzaines du mois en cours (du 1er au 15 et du 16 \u00E0 la fin du mois).")),
                react_1.default.createElement("img", { src: etapeThree, alt: "image etape", className: "mt-10 ml-10 mb-22" }),
                react_1.default.createElement("div", { className: "flex justify-center gap-10 mb-20" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/EtapeTwo", className: "bg-gray-700 p-2 rounded-lg " }, "Etape Pr\u00E9c\u00E9dente"),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/prelevements", className: "bg-[#60A8FE] p-2 rounded-lg text-black " }, "Entrer dans le site"))),
            react_1.default.createElement("div", { className: "absolute h-33 -bottom-63 bg-[#f8f8f8] w-[100vw] z-0" }),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "absolute rotate-180 -bottom-30 left-0 w-full z-2" },
                react_1.default.createElement("path", { fill: "#f8f8f8", fillOpacity: "1", d: "M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z" })),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "absolute rotate-180 -bottom-27 left-0 w-full z-1" },
                react_1.default.createElement("defs", null,
                    react_1.default.createElement("linearGradient", { id: "monDegrade", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                        react_1.default.createElement("stop", { offset: "0%", stopColor: "#60A8FE" }),
                        react_1.default.createElement("stop", { offset: "100%", stopColor: "#4950FF" }))),
                react_1.default.createElement("path", { fill: "url(#monDegrade)", fillOpacity: "1", d: "M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L0,0Z" })))));
}
exports.default = EtapeThree;
