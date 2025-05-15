"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ICON_SP = "/logo-xs.png";
function Accueil() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: " bg-white w-[100vw] h-[100dvh] z-0 fontAbe border-red-500  " },
            react_1.default.createElement("div", { className: "absolute h-30 bg-[#1d1d21] w-[100vw] z-1" }),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "absolute mt-29 z-1" },
                react_1.default.createElement("path", { fill: "#1d1d21", "fill-opacity": "1", d: "M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" })),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1440 320", className: "absolute mt-33 z-0" },
                react_1.default.createElement("defs", null,
                    react_1.default.createElement("linearGradient", { id: "monDegrade", x1: "0%", y1: "0%", x2: "100%", y2: "0%" },
                        react_1.default.createElement("stop", { offset: "0%", "stop-color": "#60A8FE" }),
                        react_1.default.createElement("stop", { offset: "100%", "stop-color": "#4950FF" }))),
                react_1.default.createElement("path", { fill: "url(#monDegrade)", "fill-opacity": "1", d: "M0,224L40,208C80,192,160,160,240,144C320,128,400,128,480,154.7C560,181,640,235,720,218.7C800,203,880,117,960,85.3C1040,53,1120,75,1200,117.3C1280,160,1360,224,1400,256L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z" })),
            react_1.default.createElement("div", { className: "flex justify-center h-40 mt-0 " },
                react_1.default.createElement("img", { src: ICON_SP, alt: "logo-xs", className: "absolute z-1 h-35" })),
            react_1.default.createElement("div", { className: "flex flex-col justify-center items-center mt-[10dvh]" },
                react_1.default.createElement("p", { className: "text-black" }, "Bienvenue sur"),
                react_1.default.createElement("h1", { className: "text-black text-xl linear-title font-bold " }, "SplitPay"),
                react_1.default.createElement("p", { className: "text-black w-80 text-justify mt-10 text-sm" }, "Une application qui vous permet d\u2019avoir, en un coup d\u2019\u0153il, une vue claire de vos abonnements et de vos paiements en plusieurs fois.")),
            react_1.default.createElement("div", { className: "point-design flex justify-center gap-15 mt-10" },
                react_1.default.createElement("div", { className: "bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md" }),
                react_1.default.createElement("div", { className: "bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md" }),
                react_1.default.createElement("div", { className: "bg-[#1d1d21] w-2.5 h-2.5 rounded-full shadow-md" })),
            react_1.default.createElement("div", { className: "w-[100%] flex justify-center mt-10" },
                react_1.default.createElement("div", { className: "bg-[#1d1d21] w-18 h-18 rounded-full flex justify-center items-center" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/EtapeOne" },
                        react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "60", height: "60", viewBox: "0 0 24 24", fill: "none", stroke: "white", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-arrow-right-icon lucide-arrow-right" },
                            react_1.default.createElement("path", { d: "M5 12h14" }),
                            react_1.default.createElement("path", { d: "m12 5 7 7-7 7" }))))))));
}
exports.default = Accueil;
